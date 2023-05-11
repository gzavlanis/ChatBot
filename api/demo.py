import openai
import gradio as gr

openai.api_key = ""

def get_model_reply(query, context = []):
    context += [query]

    completion = openai.Completion.create(engine = 'text-davinci-003', prompt = '\n\n'.join(context)[:4096], max_tokens = 2048, temperature = 0.4)
    response = completion.choices[0].text.strip('\n')
    context += [response]
    responses = [(u, b) for u, b in zip(context[::2], context[1::2])]
    return responses, context

query = 'Which is the largest country in the world?'
responses, context = get_model_reply(query, context = [])

print('<USER> ' + responses[-1][0])
print('<BOT> ' + responses[-1][1])

with gr.Blocks() as dialog_app:
    chatbot = gr.Chatbot()
    state = gr.State([])

    with gr.Row():
        txt = gr.Textbox(show_label = False, placeholder = "Enter text and press enter").style(container = False)
    txt.submit(get_model_reply, [txt, state], [chatbot, state])

dialog_app.launch()