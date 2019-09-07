import { Injectable, ElementRef } from '@angular/core';
import { alert, confirm, prompt, login, action, inputType, capitalizationType } from "tns-core-modules/ui/dialogs";

@Injectable({providedIn: 'root'})
export class DialogService {
    constructor() {
    }
    alert() {
        alert({
            title: "Your title",
            message: "Your message",
            okButtonText: "Your button text"
        }).then(() => {
            console.log("The user closed the alert.");
        });
    }

    confirm() {
        confirm({
            title: "Your title",
            message: "Your message",
            okButtonText: "Your button text",
            cancelButtonText: "Cancel text",
            neutralButtonText: "Neutral text"
        }).then((result) => {
            // The result property is true if the dialog is closed with the OK button, false if closed with the Cancel button or undefined if closed with a neutral button.
            console.log("Dialog result: " + result);
        });
    }

    prompt() {
        prompt({
            title: "Add New Cooking Station",
            message: "Enter Station Name",
            okButtonText: "OK",
            cancelButtonText: "Cancel",
           // neutralButtonText: "Neutral text",
            defaultText: "Default text",
            inputType: inputType.text,
        }).then((result) => {
            // The result property is true if the dialog is closed with the OK button, false if closed with the Cancel button or undefined if closed with a neutral button.
            console.log("Dialog result: " + result.result);
            console.log("Text: " + result.text);
        })
    }

    login() {
        login({
            title: "Your title",
            message: "Your message",
            okButtonText: "Your button text",
            cancelButtonText: "Cancel text",
            neutralButtonText: "Neutral text",
            userName: "User name label text",
            password: "Password label text"
        }).then((result) => {
            // The result property is true if the dialog is closed with the OK button, false if closed with the Cancel button or undefined if closed with a neutral button.
            console.log("Dialog result: " + result.result);
            console.log("Username: " + result.userName);
            console.log("Password: " + result.password);
        });
    }

    action() {
        action({
            message: "Your message",
            cancelButtonText: "Cancel text",
            actions: ["Option1", "Option2"]
        }).then((result) => {
            if (result == "Option1") {
                console.log("The user selected option 1.");
            } else {
                console.log("The user selected option 2.");
            }
        });
    }
}
