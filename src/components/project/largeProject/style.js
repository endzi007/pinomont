import { style, media } from 'typestyle';

export const footerButton = style({
    borderRadius: "6px",
    width: "49%"
});

export const modalBody = style({
    display: "grid",
    gridTemplateColumns: "3fr 2fr",
    gridGap: "30px"
},
    media({maxWidth: 768}, {
        display: "grid",
        gridTemplateColumns: "1fr"
    })
);

export const modalContainer = style({
    fontFamily: "Playfair Display!important",
});

export const modalTags = style({
    listStyle: "bullets",
    marginLeft: "4px",
    borderRadius: "3px",
    padding: "3px 10px"
});

export const modalTagContainer = style({

});

export const modalSize = style(
    media({minWidth: 768},{
        minWidth: "70vw",
    }),
    media({maxWidth: 768},{
        minWidth: "90vw",
    })
);
