import sanitizeHTML from "sanitize-html";


(input) => {
    return sanitizeHTML(input, {
        allowedTags: ['b', 'i', 'em', 'strong', 'a'],
        allowedAttributes: {
            'a' : ['href'],
        },
        allowedSchemes: ['http', 'https'],
        allowedIframeHostnames: [],
        textFilter: function(text){
            return text.replace(/</g,"&lt;").replace(/>/g,"&gt;")
        }
    });
};

export { sanitizeHTML} ;