import { Observable } from 'tns-core-modules/data/observable';

export class HomeMenuItemModel 
{
    icon : string;       
    title: string;
    expanded: boolean
    submenu : SubMenuModel[];
    
}
export class SubMenuModel 
{
    title:string;   
    path:string;
}

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
            title: "Home",
            expanded: false,
            submenu :[
                
            ]
           
        },
        {
            icon: String.fromCharCode(0xf787),
            title: "Menu",
            expanded: false,
            submenu :[{ 
                title: "Create Menu",
                path : "/menu"
            }]
        },
        {
            icon: String.fromCharCode(0xf2e7),
            title: "Order Food",
            expanded: false,
            submenu :[]
        },
        {
            icon: String.fromCharCode(0xf108),
            title: "KDS",
            expanded: false,
            submenu :[]
        },
        {
            icon: String.fromCharCode(0xf007),
            title: "Employee",
            expanded: false,
            submenu :[
                {
                    title: "Manage Employee",
                    path : "/menu"
                },
                {
                    title: "Assign User",
                    path : "/menu"
                }
            ]
        },
        {
            icon: String.fromCharCode(0xf085),
            title: "Setting",
            expanded: false,
            submenu :[{ 
                title: "Create Menu",
                path : "/menu"
            }]
        },
        {
            icon: String.fromCharCode(0xf05a),
            title: "About",
            expanded: false,
            submenu :[]
        }
    ];




    constructor() {
        super();
    }
}