import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "hello-world" is now active!');
	let disposable1 = vscode.commands.registerCommand('packageJson-son', () => {
		vscode.window.showInformationMessage('Hello World from hello My Son!');
	});
	let disposable2 = vscode.commands.registerCommand('packageJson-guest', () => {
		vscode.window.showInformationMessage('Hello World from hello My Guest!');
	});
	context.subscriptions.push(disposable1, disposable2);
}

// This method is called when your extension is deactivated
export function deactivate() {}
