import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../../extension';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Activate extension', async () => {
		const extension = getExtension();

		await extension.activate();

		assert.ok(extension.isActive);
    	assert.strictEqual(extension.id, "test.actions-vscode-xvfb-issue");
	});
});

function getExtension(): vscode.Extension<any> {
	const ext = vscode.extensions.getExtension("test.actions-vscode-xvfb-issue");
	assert.notStrictEqual(undefined, ext);
	return ext as vscode.Extension<any>;
  }