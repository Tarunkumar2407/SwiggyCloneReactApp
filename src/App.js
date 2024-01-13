import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";

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

const AppLayoout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayoout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/contact",
        element: <ContactUs />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <ErrorPage />
  } 
])
// const heading = React.createElement("h1", {}, "hello world")

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
