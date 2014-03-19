Ext.define('HomeWork4.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to the Homework 4'
                },

                html: [
                    "This is a homework for the MOOC iversity - Webengeneering II<br />",
                    "It's a sample app done with the sencha touch framework.",
                    "Please check out the other tabs at the bottom of the app!<br /><br />",
                    "Do you like to view the APP on your Smartphone / Tablet?<br />",
                    "Scan this QR Code!<br /><img src='http://roberttitze.cloudcontrolled.com/part2ha1/img/qrcode4.2.png' alt='qr-code' /><br />",
                    "<br />You don't know what to do with this picture? Search your App-Store for the app 'barcoo'!<br />",
                    "Then you can scan the picture ;)"
                ].join("")
            },
            {
                xtype: 'carousel',
                title: 'Carousel',
                iconCls: 'settings',

                items: [
                        {
                            xtype: 'image',
                            src: 'https://www.google.de/images/srpr/logo11w.png'
                        },
                        {
                            xtype: 'image',
                            src: 'http://www.sencha.com/img/v2/logo.png'
                        },
                        {
                            xtype: 'image',
                            src: 'https://d1wshrh2fwv7ib.cloudfront.net/assets/logo-iversity-494f4c5e361ad68f629f320da9858677.png'
                        }
                        
                ]
            },
            {
                xtype: 'list',
            	title: 'Infos',
                iconCls: 'user',
                
                itemTpl: '{title}',
                
                store: {
                	fields: ['title'],
                	data: [
                    	   {title: 'Zeile 1'},
                    	   {title: 'Zeile 2'},
                    	   {title: 'Zeile 3'},
                    	   {title: 'Zeile 4'},
                    	   {title: 'Zeile 5'},
                    	   {title: 'Zeile 6'},
                    	   {title: 'Zeile 7'},
                    	   {title: 'Zeile 8'},
                    	   {title: 'Zeile 9'},
                    	   {title: 'Zeile 10'}
                	]
                }
                
            },
            {
                title: 'Entertainment',
                iconCls: 'star',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'click the picture to watch the video'
                    },
                    {
                        xtype: 'video',
                        url: ['http://roberttitze.cloudcontrolled.com/part2ha1/bbb/bbbvideo.mp4','http://roberttitze.cloudcontrolled.com/part2ha1/bbb/bbbvideo.ogg'],
                        posterUrl: 'http://dev.sencha.com/deploy/touch/examples/production/video/resources/images/cover.jpg'
                    }
                ]
            }
        ]
    }
});
