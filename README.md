![Screenshot of the theme](static/img/image.png)

# Microwave Theme for micro.blog
A card-based theme for your blog.

## Credits
The theme was heavily inspired by Jimmy Cai's `stack` theme for Hugo that can be found here: https://github.com/CaiJimmy/hugo-theme-stack

Search comes from the official Micro.blog search plugin by Manton Reece: https://github.com/microdotblog/plugin-search-page

Images page uses Masonry and ImagesLoaded from David SeSandro: https://github.com/desandro

The archive timeline is almost entirely built from this great codepen from Shireen Taj: https://codepen.io/TajShireen/pen/JjGvVzg

Mobile hamburger menu comes from Jonathan Suh here: https://github.com/jonsuh/hamburgers

## Features
* Additional social icons from micro.blog defaults
* Built-in search
* Custom tagline
* Support for replies
* Custom lightbox for photos in posts (supports multiple!)
* Shows your most recent last.fm play (via my API)
* Shows your 'Currently Reading' micro.blog book
* Replies and Conversations
* Old-school marquee banner
plus loads more in a stacked config.json!


## Customising
I've included SASS variables for the light and dark modes of the theme. Feel free to hack away at those and create alternative `bootstrap-dark` and `bootstrap-light` files. When you change card background colours, you'll want to update the values of the reply div backgrounds in `static/css/style.css` - sorry about that.

#### Changing your tagline
Edit the config.json of your theme and change the value of `tagline`

#### Social Icons
I've only got a few of these right now - but edit your config.json with your username for each respective site and you'll get an icon. If you would like more adding to the theme, raise an issue in this repo and I'll get to it!

#### Optional Settings

#### Last.fm 
You can request an API key from me if you want to use this integration. Drop the key into your `config.json` along with your last.fm username and you'll start to see your most recently scrobbled track on the homepage.

#### Post Content
You can toggle on/off the ability to show Categories on your posts, Categories in your sidebar, the amount of time it'll take to read your posts, Archive years in your sidebar, truncation of posts in your main feed. All of these are again options in your `config.json`.

#### Marquee
We've got an old-school marquee here! You can drop a bit of something in `marqueeContent` in your `config.json` - HTML is supported - and toggle on the marquee. 

#### Categories
Sometimes you don't want some categories of posts to show full size images on your main feed, or on the photos page. There are two lists in the `config.json` that you can populate to do just this. Wrap your categories in double quotes and separate with commas.