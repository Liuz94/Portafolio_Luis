document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const prevButton = document.querySelector(".carousel-button.prev");
    const nextButton = document.querySelector(".carousel-button.next");
    const articleNumber = document.querySelector(".article-number");
    const articleTitle = document.querySelector(".article-title");
    const articleSubtitle = document.querySelector(".article-subtitle");
    const articleDescription = document.querySelector(".article-description");
    const blogLink = document.querySelector(".blog-link");
    const rightTitle = document.querySelector(".right-title");
    const rightDescription = document.querySelector(".right-description");

    const totalItems = document.querySelectorAll(".carousel-item").length;
    let currentIndex = 0;

    // Datos de los artículos (puedes modificarlos según tus necesidades)
    const articles = [
        {
            title: "Artículo 1",
            subtitle: "Título del Artículo 1",
            description: "Descripción del Artículo 1. Puede ser un texto largo que requiera scroll. Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n\n amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. \n\n amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. \n\n amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. \n\n amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. \n\n amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. \n\n amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. \n\n amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. \n\n amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. \n\n amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. \n\n amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. \n\n amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. \n\n amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. \n\n amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n\n amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. \n\n amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. \n\n amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. \n\n amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. \n\n amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. \n\n amet, consectetur adipiscing elit",
            link: "#",
            rightTitle: "Explicación del Artículo 1",
            rightDescription: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n\n amet, consectetur adipiscing elit"
        },
        {
            title: "Artículo 2",
            subtitle: "Título del Artículo 2",
            description: "Descripción del Artículo 2. Puede ser un texto largo que requiera scroll.",
            link: "#",
            rightTitle: "Explicación del Artículo 2",
            rightDescription: "Aquí puedes poner un texto más detallado que explique el Artículo 2."
        },
        {
            title: "Artículo 3",
            subtitle: "Título del Artículo 3",
            description: "Descripción del Artículo 3. Puede ser un texto largo que requiera scroll.",
            link: "#",
            rightTitle: "Explicación del Artículo 3",
            rightDescription: "sadasd",
        },
        {
            title: "Artículo 4",
            subtitle: "Título del Artículo 4",
            description: "Descripción del Artículo 4. Puede ser un texto largo que requiera scroll.",
            link: "#",
            rightTitle: "Explicación del Artículo 4",
            rightDescription: "Aquí puedes poner un texto más detallado que explique el Artículo 4."
        },
        {
            title: "Artículo 5",
            subtitle: "Título del Artículo 5",
            description: "Descripción del Artículo 5. Puede ser un texto largo que requiera scroll.",
            link: "#",
            rightTitle: "Explicación del Artículo 5",
            rightDescription: "Aquí puedes poner un texto más detallado que explique el Artículo 5."
        }
    ];

    // Función para actualizar la información del artículo
    function updateArticleInfo(index) {
        const article = articles[index];
        articleNumber.textContent = `${index + 1}/${totalItems}`;
        articleTitle.textContent = article.title;
        articleSubtitle.textContent = article.subtitle;
        articleDescription.textContent = article.description;
        blogLink.href = article.link;
        rightTitle.textContent = article.rightTitle;
        rightDescription.textContent = article.rightDescription;
    }

    // Mover al artículo anterior (solo mueve el carrusel, no actualiza la información)
    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            carousel.style.transform = `translateX(${-currentIndex * (100 / 3)}%)`;
        }
    });

    // Mover al siguiente artículo (solo mueve el carrusel, no actualiza la información)
    nextButton.addEventListener("click", () => {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
            carousel.style.transform = `translateX(${-currentIndex * (100 / 3)}%)`;
        }
    });

    // Seleccionar un artículo al hacer clic en su imagen
    document.querySelectorAll(".carousel-item").forEach((item, index) => {
        item.addEventListener("click", () => {
            currentIndex = index;
            updateArticleInfo(currentIndex); // Actualizar la información del artículo
        });
    });

    // Inicializar la información del primer artículo
    updateArticleInfo(currentIndex);
});

