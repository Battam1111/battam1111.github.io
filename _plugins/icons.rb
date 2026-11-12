# Inline SVG icons for the icon-font markup the content still carries.
# _pages/about.md, _pages/blog.md, the post meta and the jekyll-socials output write icons as
# <i class="fa-brands fa-github"></i> or <i class="ai ai-orcid"></i>. The site no longer loads Font Awesome or
# academicons, so every finished page swaps those empty <i> elements for the matching SVG in _includes/icons/
# (the same files the templates include directly). A class with no entry in ICONS is left as it is.
module SiteIcons
  ICONS = {
    "fa-envelope" => "mail", "fa-location-dot" => "location", "ai-google-scholar" => "google-scholar",
    "fa-github" => "github", "fa-x-twitter" => "x", "fa-twitter" => "x", "ai-orcid" => "orcid",
    "fa-file-pdf" => "cv", "fa-note-sticky" => "xiaohongshu", "fa-bilibili" => "bilibili",
    "fa-zhihu" => "zhihu", "fa-weixin" => "wechat", "fa-square-rss" => "rss", "fa-rss" => "rss",
    "fa-calendar" => "calendar", "fa-hashtag" => "hashtag", "fa-tag" => "tag", "fa-circle-info" => "info",
    "fa-sun" => "sun", "fa-moon" => "moon", "fa-magnifying-glass" => "search",
  }.freeze
  ELEMENT = %r{<i\s+class="([^"]*)"[^>]*>\s*</i>}.freeze

  def self.svg(site, name)
    @cache ||= {}
    @cache[name] ||= File.read(File.join(site.source, "_includes", "icons", "#{name}.svg")).strip
  end

  def self.swap(site, html)
    html.gsub(ELEMENT) do |whole|
      name = Regexp.last_match(1).split.map { |c| ICONS[c] }.compact.first
      name ? svg(site, name) : whole
    end
  end
end

Jekyll::Hooks.register [:pages, :documents], :post_render do |doc|
  next unless doc.output_ext == ".html" && doc.output&.include?("<i ")

  doc.output = SiteIcons.swap(doc.site, doc.output)
end
