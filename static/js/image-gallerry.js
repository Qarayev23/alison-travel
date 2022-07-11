jQuery("#animated-thumbnails-gallery")
.justifiedGallery({
    captions: false,
    // lastRow: "hide",
    rowHeight: 300,
    margins: 10,
})
.on("jg.complete", function () {
    window.lightGallery(
        document.getElementById("animated-thumbnails-gallery"),
        {
            autoplayFirstVideo: false,
            pager: false,
            galleryId: "nature",
            plugins: [lgZoom, lgThumbnail],
            mobileSettings: {
                controls: false,
                showCloseIcon: false,
                download: false,
                rotate: false
            }
        }
    );
});