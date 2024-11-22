# from transformers import AutoTokenizer, AutoModelForSeq2SeqLM



# def text_summary(fileId, fs, transcript=""):
#     try:
#         sentences = transcript
        
#         if len(sentences) == 0:
#             oid = ObjectId(fileId)
#             data = fs.get(oid)
#             sentences = data.read()

#         # Load tokenizer 
#         tokenizer = AutoTokenizer.from_pretrained("facebook/bart-large-cnn")
        
#         # Load model 
#         model = AutoModelForSeq2SeqLM.from_pretrained("facebook/bart-large-cnn")

#         # Create tokens - number representation of our text
#         tokens = tokenizer(sentences, truncation = True, padding = "longest", return_tensors = "pt")

#         # Summarize 
#         summarize_text = model.generate(**tokens)

#         output = []

#         #Trim extra characters
#         summary = tokenizer.decode(summarize_text[0]).split('.')
#         summary[0] = summary[0][7:]
        
#         for i in range(len(summary)-1):
#             output.append(summary[i].strip())

#         print("Successful Summariser")
#         return output

#     except Exception as e:
#         print(e)
#         return "Error Occurred in Summariser"

# def text_summary(fileId, fs, transcript=""):
#     try:
#         sentences = transcript
        
#         if len(sentences) == 0:
#             try:
#                 oid = ObjectId(fileId)
#                 data = fs.get(oid)
#                 # Decode bytes to string
#                 sentences = data.read().decode('utf-8')
#             except Exception as e:
#                 print(f"Error reading file: {str(e)}")
#                 return "Error Occurred in Summariser"

#         if not isinstance(sentences, str):
#             print("Error: Input must be a string")
#             return "Error Occurred in Summariser"

#         if len(sentences.strip()) == 0:
#             print("Error: Empty text")
#             return "Error Occurred in Summariser"

#         try:
#             # Load tokenizer 
#             tokenizer = AutoTokenizer.from_pretrained("facebook/bart-large-cnn")
            
#             # Load model 
#             model = AutoModelForSeq2SeqLM.from_pretrained("facebook/bart-large-cnn")

#             # Create tokens - number representation of our text
#             tokens = tokenizer(sentences, truncation=True, padding="longest", return_tensors="pt", max_length=1024)

#             # Summarize 
#             with torch.no_grad():
#                 summarize_text = model.generate(**tokens, max_length=150, min_length=40, length_penalty=2.0)

#             # Decode the generated tokens
#             summary = tokenizer.decode(summarize_text[0], skip_special_tokens=True)
            
#             # Split into sentences and clean up
#             sentences = [s.strip() for s in summary.split('.') if s.strip()]
            
#             print("Successful Summariser")
#             return sentences

#         except Exception as e:
#             print(f"Model error: {str(e)}")
#             return "Error Occurred in Summariser"

#     except Exception as e:
#         print(f"Summarizer error: {str(e)}")
#         return "Error Occurred in Summariser"
