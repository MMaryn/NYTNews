import moment from "moment";

const getMultimediaFormat = (multimedia, format) => {
    if (!multimedia) {
        return "";
    }

    const mathingFormat = multimedia.find(media => media.format == format);
    if (!mathingFormat) {
        return "";
    }

    return mathingFormat.url;
}

export const reshapeNewsData = news => (
    news.map(({ abstract, byline, geo_facet, multimedia, title, url }) => ({
        description: abstract || "",
        author: byline ? byline.replace("By ", "") : "",
        location: geo_facet.length > 0 ? geo_facet[0] : "",
        imageUrl: getMultimediaFormat(multimedia, "thumbLarge"),
        title,
        url
    }))
);

export const filterNewsBySearchTerm = (newsItem, searchTerm) => {
    if (searchTerm.length == 0) {
        return [];
    }

    return newsItem.filter(({ description, author, title }) => {
        description.toLowerCase().indexOf(searchTerm) > -1 ||
            author.toLowerCase().indexOf(searchTerm) > -1 ||
            title.toLowerCase().indexOf(searchTerm) > -1
    });
};

