import sanitizeHTML from "sanitize-html";


const sanitize = (input) => {
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

export { sanitize } ;