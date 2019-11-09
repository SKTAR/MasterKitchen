import { Observable } from 'tns-core-modules/data/observable';

export class HomeViewModel extends Observable {
    profile = {
        name: "John Smith",
        avatar: "~/assets/images/icon/profile.png"
    }

    quickNavItems = [
        {
            icon: "~/assets/images/icon/wifi.png"
        },
        {
            icon: "~/assets/images/icon/bluetooth.png"
        },
        {
            icon: "~~/assets/images/icon/battery.png"
        },
        {
            icon: "~/assets/images/icon/airplane.png"
        }
    ];

    appNavItems = [
        {
            icon: "~/assets/images/icon/home.png",
            title: "Overview"
        },
        {
            icon: "~/assets/images/icon/explore.png",
            title: "Discover"
        },
        {
            icon: "~/assets/images/icon/map.png",
            title: "Maps"
        },
        {
            icon: "~/assets/images/icon/question.png",
            title: "About"
        }
    ];

    profileNavItems = [
        {
            title: "Messages"
        },
        {
            title: "Notifications"
        },
        {
            title: "Contacts"
        },
        {
            title: "Activity"
        },
        {
            title: "Security"
        },
        {
            title: "Settings"
        },
        {
            title: "Help"
        }
    ];

    

    homeMenuItems = [
        {
            icon: String.fromCharCode(0xf015),
            title: "Home"
        },
        {
            icon: String.fromCharCode(0xf2e7),
            title: "Order Food"
        },
        {
            icon: String.fromCharCode(0xf085),
            title: "Setting"
        },
        {
            icon: "~/assets/images/icon/question.png",
            title: "About"
        }
    ];


    constructor() {
        super();
    }
}