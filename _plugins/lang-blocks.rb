# frozen_string_literal: true

# One language per page.
#
# jekyll-polyglot writes every page once per language (English at /, Chinese under /zh/, Japanese under /ja/),
# and the sources keep the three languages side by side in <span lang="..."> and <div lang="..."> blocks.
# The stylesheet hides every element whose lang is not the page's own
# (_sass/_yanjun-craft.scss: html[lang="xx"] [lang]:not([lang="xx"]) { display: none }), so each build drops
# exactly those elements from <body>: a reader sees the same page, and each URL carries one language.
#
# This runs per page at :post_render, before polyglot's :site :post_render pass rewrites the links; the
# ferh="..." attributes that its static_href tag leaves for that pass are kept as they are.
require "nokogiri"

Jekyll::Hooks.register [:pages, :documents], :post_render do |doc|
  next unless doc.output_ext == ".html"
  next unless doc.output&.include?(" lang=")

  site = doc.site
  lang = (site.respond_to?(:active_lang) && site.active_lang) || site.config["lang"]
  html = Nokogiri::HTML5(doc.output)
  body = html.at("body")
  next unless body

  others = body.css("[lang]").reject { |node| node["lang"] == lang }
  next if others.empty?

  others.each(&:remove)
  doc.output = html.to_html
end
