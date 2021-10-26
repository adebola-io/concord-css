 const setThemeColor = (color) => {
        if (document.querySelector('meta[name="theme-color"]')) {
            document.querySelector('meta[name="theme-color"]').remove();
        }
        let metaTag = document.createElement('meta');
        metaTag.name = "theme-color";
        metaTag.content = color;
        document.querySelector('head').append(metaTag);
    }