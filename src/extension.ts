import * as vscode from 'vscode';
import axios from 'axios';

// Function to fetch ChatGPT response
async function fetchChatGPTResponse(question: string): Promise<string> {
  // TODO(briancain): Replace this const with a proper vscode configuration var
  const apiKey = 'YOUR_CHATGPT_API_KEY'; // Replace with your ChatGPT API key
  const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

  try {
    const response = await axios.post(
      apiUrl,
      {
        prompt: question,
        max_tokens: 50, // Adjust the max_tokens as needed
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );

    return response.data.choices[0]?.text || 'No response received from ChatGPT.';
  } catch (error) {
    console.error('Error fetching ChatGPT response:', error.message);
    return 'An error occurred while fetching the response.';
  }
}

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.askChatGPT', async () => {
    const question = await vscode.window.showInputBox({
      placeHolder: 'Ask a question to ChatGPT',
    });

    if (question) {
      const response = await fetchChatGPTResponse(question);
      vscode.window.showInformationMessage(`ChatGPT Response: ${response}`);
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}

