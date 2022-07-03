import PropTypes from "prop-types";

import settings from "./settings";
import socialTags from "./socialTags";
const SEO = (props) => {
  const { url, title, image, description, schemaType } = props;

  return (
    <>
      <title>{title} | FastfoodIlo</title>
      <meta name="description" content={description} />
      <meta itemprop="name" content={title} />
      <meta itemprop="description" content={description} />
      <meta itemprop="image" content={image} />
      {socialTags(props).map(({ name, content }) => {
        return <meta key={name} name={name} content={content} />;
      })}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": schemaType,
            name: title,
            about: description,
            url: url,
          }),
        }}
      />
      <link
        rel="shortcut icon"
        href="/images/Food/build-burger-slide-final.png"
      />
    </>
  );
};

SEO.defaultProps = {
  url: "/fastfood",
  openGraphType: "Website",
  schemaType: "Article",
  title: settings && settings.meta && settings.meta.title,
  description: settings && settings.meta && settings.description,
  image:
    settings && settings.meta && settings.social && settings.meta.social.grafic,
};

SEO.propTypes = {
  url: PropTypes.string,
  openGraphType: PropTypes.string,
  schemaType: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default SEO;
