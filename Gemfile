source 'https://rubygems.org'

gem 'jekyll'

# The plugins the site uses (2026-11-21: the al-folio ones nothing read any more are gone: get-json, jupyter-notebook,
# tabs, toc, twitter-plugin, jemoji, classifier-reborn, and with them css_parser, feedjira, httparty, ostruct).
group :jekyll_plugins do
    gem 'jekyll-3rd-party-libraries'   # the vega scripts of the charts (scripts.liquid)
    gem 'jekyll-archives-v2'           # year, tag and category pages; off until Notes grows (_config.yml)
    gem 'jekyll-cache-bust'            # bust_file_cache for the scripts
    gem 'jekyll-email-protect'         # encode_email for the mailto link
    gem 'jekyll-feed'
    gem 'jekyll-imagemagick'           # the headshot and the publication thumbnails in several sizes
    gem 'jekyll-link-attributes'       # external links open in a new tab
    gem 'jekyll-minifier'
    gem 'jekyll-paginate-v2'           # the Notes list
    gem 'jekyll-polyglot'   # one URL per language: English at /, Chinese at /zh/, Japanese at /ja/
    gem 'jekyll-regex-replace'         # author marks in the bibliography (bib.liquid)
    gem 'jekyll-scholar'               # the publications
    gem 'jekyll-socials'               # the contact icons ({% social_links %})
    gem 'jekyll-terser', :git => "https://github.com/RobertoJBeltran/jekyll-terser.git"
end

group :other_plugins do
    gem 'observer'       # used by jekyll-scholar
end
