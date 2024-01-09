import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRREirGFDJfQK__71D8dXX0ocP0evnWczvOkUkRlrHEdg&s"
          alt="logo-image"
        />
      </div>
      <div className="nav-items">
        <ul className="item-list">
          <li>Search</li>
          <li>Offers</li>
          <li>Help</li>
          <li>Login/Signup</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// const resObj = {
//         "info": {
//           "id": "293035",
//           "name": "The Grillz Tandoori Junction",
//           "cloudinaryImageId": "eppxfpe92hkar1judpzd",
//           "areaName": "MDA Comercial Complex",
//           "costForTwo": "₹200 for two",
//           "cuisines": [
//             "Indian",
//             "Chinese",
//             "Grill"
//           ],
//           "avgRating": 4,
//           "parentId": "209304",
//           "avgRatingString": "4.0",
//           "totalRatingsString": "1K+",
//           "sla": {
//             "deliveryTime": 16,
//             "lastMileTravel": 0.2,
//             "serviceability": "SERVICEABLE",
//             "slaString": "16 mins",
//             "lastMileTravelString": "0.2 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-01-09 23:00:00",
//             "opened": true
//           },
//           "badges": {
            
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
                
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "₹120 OFF",
//             "subHeader": "ABOVE ₹199",
//             "discountTag": "FLAT DEAL"
//           },
//           "orderabilityCommunication": {
//             "title": {
              
//             },
//             "subTitle": {
              
//             },
//             "message": {
              
//             },
//             "customIcon": {
              
//             }
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
            
//           }
//         },
//         "analytics": {
//           "context": "seo-data-378edc7f-cb27-4b49-a199-29faab60740d"
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/the-grillz-tandoori-junction-mda-comercial-complex-moradabad-293035",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
// }

const restaurantList = [
    {
        "info": {
          "id": "293035",
          "name": "The Grillz Tandoori Junction",
          "cloudinaryImageId": "eppxfpe92hkar1judpzd",
          "areaName": "MDA Comercial Complex",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Indian",
            "Chinese",
            "Grill"
          ],
          "avgRating": 4,
          "parentId": "209304",
          "avgRatingString": "4.0",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 16,
            "lastMileTravel": 0.2,
            "serviceability": "SERVICEABLE",
            "slaString": "16 mins",
            "lastMileTravelString": "0.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-01-09 23:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹120 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-378edc7f-cb27-4b49-a199-29faab60740d"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/the-grillz-tandoori-junction-mda-comercial-complex-moradabad-293035",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "223942",
          "name": "Grill's Yum Yum Mda",
          "cloudinaryImageId": "gadikgs3yffev0wf3ql7",
          "locality": "Ram Ganga Vihar 2",
          "areaName": "Statdium Road",
          "costForTwo": "₹150 for two",
          "cuisines": [
            "Beverages",
            "Snacks",
            "Tandoor",
            "Chinese"
          ],
          "avgRating": 4.1,
          "veg": true,
          "parentId": "472024",
          "avgRatingString": "4.1",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 17,
            "lastMileTravel": 0.3,
            "serviceability": "SERVICEABLE",
            "slaString": "17 mins",
            "lastMileTravelString": "0.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-01-10 00:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹120 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-378edc7f-cb27-4b49-a199-29faab60740d"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/grills-yum-yum-mda-ram-ganga-vihar-2-statdium-road-moradabad-223942",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "143548",
          "name": "Mohindra's Sweetschilly Restaurant",
          "cloudinaryImageId": "nfxjxvrymi40pwib3p54",
          "locality": "GMD Road",
          "areaName": "Pat Pat Sarai",
          "costForTwo": "₹150 for two",
          "cuisines": [
            "South Indian",
            "Chinese",
            "Italian"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "137860",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 36,
            "lastMileTravel": 5,
            "serviceability": "SERVICEABLE",
            "slaString": "36 mins",
            "lastMileTravelString": "5.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-01-09 22:30:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹120 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-378edc7f-cb27-4b49-a199-29faab60740d"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/mohindras-sweetschilly-restaurant-gmd-road-pat-pat-sarai-moradabad-143548",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "406850",
          "name": "Maheshwari Dhaba",
          "cloudinaryImageId": "kztmcozunkoourctlna3",
          "locality": "Rampur Road",
          "areaName": "Station Road",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "North Indian"
          ],
          "avgRating": 4.1,
          "veg": true,
          "parentId": "249997",
          "avgRatingString": "4.1",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 5.6,
            "serviceability": "SERVICEABLE",
            "slaString": "29 mins",
            "lastMileTravelString": "5.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-01-10 01:50:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹120 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-378edc7f-cb27-4b49-a199-29faab60740d"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/maheshwari-dhaba-rampur-road-station-road-moradabad-406850",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "478212",
          "name": "Mezban Shama Restaurant (Imran)",
          "cloudinaryImageId": "mjqlm4yak8kkdlngtd93",
          "locality": "Court Road \n",
          "areaName": "Budh Bazar",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Hyderabadi",
            "Biryani",
            "Mughlai"
          ],
          "avgRating": 4.2,
          "parentId": "454659",
          "avgRatingString": "4.2",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 4.8,
            "serviceability": "SERVICEABLE",
            "slaString": "29 mins",
            "lastMileTravelString": "4.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-01-09 23:30:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹120 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-378edc7f-cb27-4b49-a199-29faab60740d"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/mezban-shama-restaurant-imran-court-road-budh-bazar-moradabad-478212",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "583028",
          "name": "NIC Ice Creams",
          "cloudinaryImageId": "85825a6d74b1059a63a9b688de9f67ce",
          "locality": "Bartan Bazaar",
          "areaName": "Budh Bazar",
          "costForTwo": "₹120 for two",
          "cuisines": [
            "Ice Cream",
            "Desserts"
          ],
          "avgRating": 4.6,
          "veg": true,
          "parentId": "6249",
          "avgRatingString": "4.6",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 27,
            "lastMileTravel": 5,
            "serviceability": "SERVICEABLE",
            "slaString": "27 mins",
            "lastMileTravelString": "5.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-01-09 23:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹120 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-378edc7f-cb27-4b49-a199-29faab60740d"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/nic-ice-creams-bartan-bazaar-budh-bazar-moradabad-583028",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "181518",
          "name": "Veer Ji Malai Chaap Wale",
          "cloudinaryImageId": "nn57tpcs9hkwvywibiaw",
          "locality": "MIT Road",
          "areaName": "Ram ganga vihar",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Chinese",
            "Afghani"
          ],
          "avgRating": 3.8,
          "veg": true,
          "parentId": "12056",
          "avgRatingString": "3.8",
          "totalRatingsString": "500+",
          "sla": {
            "deliveryTime": 20,
            "lastMileTravel": 0.5,
            "serviceability": "SERVICEABLE",
            "slaString": "20 mins",
            "lastMileTravelString": "0.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-01-09 23:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹120 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-378edc7f-cb27-4b49-a199-29faab60740d"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/veer-ji-malai-chaap-wale-mit-road-ram-ganga-vihar-moradabad-181518",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "417798",
          "name": "Angry Oven Pizza",
          "cloudinaryImageId": "lrxdxwdbo1ppkd1pdgmg",
          "locality": "Narang Kutir",
          "areaName": "Pat Pat Sarai",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Italian",
            "Pizzas"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "418493",
          "avgRatingString": "4.3",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 33,
            "lastMileTravel": 5,
            "serviceability": "SERVICEABLE",
            "slaString": "33 mins",
            "lastMileTravelString": "5.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-01-09 22:50:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹120 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-378edc7f-cb27-4b49-a199-29faab60740d"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/angry-oven-pizza-narang-kutir-pat-pat-sarai-moradabad-417798",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "313182",
          "name": "Grill's Yum Yum",
          "cloudinaryImageId": "cd8eg0j5im1qscnhmbpn",
          "locality": "Kothiwal Nagar",
          "areaName": "Budh Bazaar",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "North Indian",
            "Chinese"
          ],
          "avgRating": 4,
          "veg": true,
          "parentId": "90884",
          "avgRatingString": "4.0",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 31,
            "lastMileTravel": 5.7,
            "serviceability": "SERVICEABLE",
            "slaString": "31 mins",
            "lastMileTravelString": "5.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-01-09 23:30:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹120 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-378edc7f-cb27-4b49-a199-29faab60740d"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/grills-yum-yum-kothiwal-nagar-budh-bazaar-moradabad-313182",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      }
    ]

const RestaurantCard = (props) => {
    // console.log(props)
    const {resData} = props
    const {name, avgRatingString, cuisines} = resData.info
    const {deliveryTime} = resData.info.sla
    // console.log(deliveryTime)
  return (
    <div>
      <div className="res-card">
        <img
          className="food-image"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}
          alt="food-image"
        />
        <div className="res-content">
          <h3>{name}</h3>
          <h4>{avgRatingString} stars</h4>
          <h4>{resData.info.sla.deliveryTime} mins</h4>
          <h4>{cuisines.join(", ")}</h4>
        </div>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="restaurant-container">
    {
        restaurantList.map((restaurant) => {
            return(
                <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>
            )
        })
    }
    </div>
  );
};

const AppLayoout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

// const heading = React.createElement("h1", {}, "hello world")

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayoout />);
