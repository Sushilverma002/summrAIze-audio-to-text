from bson import ObjectId
import os
from bson import ObjectId
from transformers import pipeline

# Suppress Hugging Face symlink warnings
os.environ['HF_HUB_DISABLE_SYMLINKS_WARNING'] = '1'

def text_summary(fileId, fs, transcript=""):
    try:
        sentences = transcript
        
        # Fetch transcript if not provided
        if len(sentences) == 0:
            oid = ObjectId(fileId)
            data = fs.get(oid)
            sentences = data.read().decode("utf-8")

        # Initialize summarization pipeline
        summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

        # Set summarization parameters
        params = {
            "max_length": 256,
            "min_length": 50,         # Adjusted minimum length for concise yet detailed summaries
            "no_repeat_ngram_size": 3,  # Avoid repetitive phrases
            "early_stopping": True,   # Stop early when confident
            "repetition_penalty": 2.0,
            "length_penalty": 1.0,
            "num_beams": 4           # Enable diverse beam search
        }

        # Generate summary
        result = summarizer(sentences, **params)

        # Extract and format the summary text
        summary_text = result[0]['summary_text']
        print("Summarization Successful")
        return summary_text

    except Exception as e:
        print(f"Error occurred in Summarizer: {e}")
        return "Error occurred in Summarizer"