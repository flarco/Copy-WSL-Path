'use strict';
import * as ncp from "copy-paste";
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('copy-WSL-path.copy', (e) => {
        const text = "/mnt" + (e.path as string).replace(':', '').replace('/C/', '/c/');
        ncp.copy(text);
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}
