# One language per page.
# The sources keep the three languages side by side (<span lang="en">, <div lang="zh">, ...); jekyll-polyglot
# builds the site once per language, and here every element written for another language is dropped from that
# build. These are exactly the elements the stylesheet hides (html[lang="en"] [lang]:not([lang="en"]) and so on),
# so the visible page stays the same while each URL carries one language only.
# Never put a lang attribute on something that must show in every language: it would vanish from the other two.
require "nokogiri"

module LangBlocks
  def self.build_lang(site)
    (site.respond_to?(:active_lang) && site.active_lang) || site.config["lang"]
  end

  # Removes the elements of the other languages under `root`; returns false when there was nothing to remove.
  def self.prune(root, lang)
    others = root.css("[lang]").reject { |node| node["lang"] == lang }
    return false if others.empty?

    others.each(&:remove)
    true
  end
end

# The body of a post or news item, as soon as Markdown has become HTML. The feed (and anything else that reads
# doc.content rather than the finished page) takes the body from here, so it must already hold one language.
Jekyll::Hooks.register :documents, :post_convert do |doc|
  next unless doc.content.is_a?(String) && doc.content.include?(" lang=")

  body = Nokogiri::HTML5.fragment(doc.content)
  doc.content = body.to_html if LangBlocks.prune(body, LangBlocks.build_lang(doc.site))
end

# The finished page, layout included (navbar, headings, footer).
Jekyll::Hooks.register [:pages, :documents], :post_render do |doc|
  next unless doc.output_ext == ".html"
  next unless doc.output&.include?(" lang=")

  html = Nokogiri::HTML5(doc.output)
  body = html.at("body")
  next unless body

  doc.output = html.to_html if LangBlocks.prune(body, LangBlocks.build_lang(doc.site))
end
