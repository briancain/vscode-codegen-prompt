import * as vscode from 'vscode';
import axios from 'axios';

// Function to fetch ChatGPT response
async function fetchChatGPTResponse(question: string): Promise<string> {
  // TODO(briancain): Replace this const with a proper vscode configuration var
  const apiKey = 'fix-me'; // Replace with your ChatGPT API key
  // TODO(briancain): In reality, users will need a nice way to configure
  // this plugin with their ChatGPT API key. We can configure the editors workspace to
  // look for this variable.
  // const apiKey = vscode.workspace.getConfiguration('ChatGPT API Key Extension'); // Replace with your ChatGPT API key
  const apiUrl = 'https://api.openai.com/v1/completions'; // legacy
  // const apiUrl = 'https://api.openai.com/v1/chat/completions';

  try {
    const response = await axios.post(
      apiUrl,
      {
        prompt: question,
        max_tokens: 50, // Adjust the max_tokens as needed
        model: "gpt-3.5-turbo-instruct",
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

