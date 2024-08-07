# Project Title

YouDress

## Overview

YouDress is a virtual fashion retail storefront that employs a 'dress up doll' feature so users can visually plan an outfit to purchase. Whether they're considering a new piece to go with their exisiting collection or buying a whole new outfit, their customized doll will alow them to unleash their creativity and consider various styling options. This is a fun way for users to filter out products to find and purchase new wardrobe pieces.

### Problem

When purchasing clothing online, the only way to visually conceptualize your future outfit is to consider the model in product photos and the list of clothing items in your shopping cart. Rather than having to put the outfit together once the user's pieces arrive in the mail, YouDress encourages the user to conceptualize how these pieces would fit together in a new or existing wardrobe before ordering.
YouDress attempts to bring the physical "try-on" experience found in a physical retailer, to a digital storefront, albeit in a more stylized and abstract way.

### User Profile

Online Shoppers (Women's Fashion // Young Adult Focus)
-Women ages 25-34 (highest preference for online shopping, potential nostalgia for early internet era dress up games)
-Women ages 18-25 (likely to be mobile users)
-Middle to upper class
-Likely use either Snapchat/Instagram/Twitter/Pinterest for fashion information

### Features

![Mockup 1](readme-images/MOCKUP_1.png)

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

Dress up doll Widget
-Provide base customizable dress up doll avatar widget, that can be toggled/hidden so as to allow user to focus on selecting items for purchase
-Provide category-specific layered outfit item SVG's on a dress up doll model that are put on/swapped/re-coloured/taken off by user inputs, which in-turn filter clothing items/products
-Dress up doll should persist from page to page and outfit information stored so user does not lose their outfit by navigating the website

Products Filter
-User may filter products by using dress up doll, or by manually selecting sidebar product filters i.e. dresses + maxi + yellow + under $15

Products Display
-Sorting feature so users may sort products by popularity/newness/price high to low/price low to high
-Buttons on each product card allow users to instantly add to cart, favourite, and put item-type on dress up doll
-Clicking product should bring up module/page of extra product information, as well as display add to cart & favourite buttons.

Page Navigation & Search Feature
-Nav bar will have logo link to homepage

- New button will link to New Products Page
- Sale button will link to Sale Products Page
  -Categories page will link to Categories Page
- Heart Icon will link to user Favourites Page
  -user icon will link to either
  -logged in profile
  -option to sign up
  -search button will expand and allow user to search product tags
  -shopping cart icon will link Shopping Cart Page

Pages
-New/Sale/Category will filter products
-Favourites will filter saved products
-Shopping Cart will filter shopping cart purchases

## Implementation

### Tech Stack

- React
- MySQL
- MySQL Workbench
- Express
- Client libraries:
  - react
  - react-router
  - axios
- Server libraries:
  - knex
  - express
  - bcrypt for password hashing

### APIs

- Need to locate fashion retail API to populate site with products and check that filter system is viable
  -Alternatively use ChatGPT + Mocky to get exact qualities I want from each fashion item (i.e. category/type/color/price/sizes)
  -This will be a temporary measure, before building my own server

### Sitemap

- Home Page (filterable products)
- New Products Page (filterable products)
- Sale Products Page (filterable products)
- Categories Pages (filter item type)
- Favourites Page (filter user favorited items)
- Shopping Cart Page (filter user items added to cart)
- Register Page
- Login Page
- User Profile Page

### Mockups

-See first image in features
