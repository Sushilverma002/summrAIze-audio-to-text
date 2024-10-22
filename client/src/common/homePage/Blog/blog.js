import React from "react";
import { Article } from "../../../ui";

import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

import "./blog.css";

const blogLinks = [
  {
    title: "Natural Language Processing Technology",
    imgUrl: blog01,
    link: "https://medium.com/greyatom/a-dive-into-natural-language-processing-103ae9b0a588",
    text: "This post will take you a beginner's guide to Natural Language Processing. A language is a way we humans, communicate with each other. Each day we produce data from emails, SMS, tweets, etc. we must have methods to understand these type of data, just like we do for other types of data. We will learn some of the basic but important techniques in Natural Language Processing. In simple terms, Natural language processing (NLP) is the ability of computers to understand human speech as it is spoken. NLP helps to analyze, understand, and derive meaning from human language in a smart and useful way. NLP algorithms are machine learning algorithms based. NLP learns by analyzing a set of examples (i.e. a large corpus, like a book, down to a collection of sentences), and making a statistical inference, instead of coding large sets of rules. We can organize the massive chunks of text data and solve a wide...",
  },
  {
    title: "Speech Recognition",
    imgUrl: blog02,
    link: "https://jonathan-hui.medium.com/speech-recognition-deep-speech-ctc-listen-attend-and-spell-d05e940e9ed1",
    text: "Deep Learning (DL) changes many Machine Learning (ML) fields that heavily depend on domain knowledge. Decades of research in modeling this domain knowledge can be replaced with DL models with higher accuracy and less manual labor. In this article, we will...",
  },
  {
    title: "Text Summarizer Using NLP",
    imgUrl: blog03,
    link: " https://www.irejournals.com/formatedpaper/1703633.pdf",
    text: "TText summary is the way of selecting important points from the provided article or a document that can be reduced by a program. As the data overload problem increased, so did the interest in capturing the text as....",
  },
  {
    title: "Speech to Text Conversion",
    imgUrl: blog04,
    link: "https://www.researchgate.net/publication/342147736_Speech_to_text_conversion_and_summarization_for_effective_understanding_and_documentation",
    text: "Speech,  is  the  most  powerful  way  of  communication  with  which  human beings  express  their  thoughts  and  feelings  through  different  languages. ...",
  },
  {
    title: "Coding In Deep Learning",
    imgUrl: blog05,
    link: "https://towardsdatascience.com/coding-deep-learning-for-beginners-start-a84da8cb5044",
    text: "Intuition based series of articles about Neural Networks dedicated to programmers who want to understand basic math behind the code and non-programmers who want to know how to turn math into code...",
  },
];

const Blog = () => (
  <div className="bg11Blog sectionPadding" id="blog">
    <div className="bg11BlogHeading">
      <h1 className="gradientText">
        A lot is happening about this, <br /> Our Refrences for Deep Learning.
      </h1>
    </div>
    <div className="bg11BlogContainer">
      <div className="bg11BlogContainerGroupA">
        <Article
          imgUrl={blog01}
          title={blogLinks[0].title}
          link={blogLinks[0].link}
          textContent={blogLinks[0].text}
        />
      </div>
      <div className="bg11BlogContainerGroupB">
        {blogLinks.map((item, index) => (
          <>
            {index ? (
              <Article
                imgUrl={item.imgUrl}
                title={item.title}
                link={item.link}
                key={item.title + index}
                textContent={item.text}
              />
            ) : null}
          </>
        ))}
      </div>
    </div>
  </div>
);

export default Blog;
