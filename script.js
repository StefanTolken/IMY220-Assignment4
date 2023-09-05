$(() => {
  $(".submit").on("click", function () {
    let messageValue = $("#message").val().trim();

    if (messageValue !== "") {
      let color = "";

      if ($(this).attr("id") === "left") {
        color = "left";
      } else if ($(this).attr("id") === "right") {
        color = "right";
      }

      // Detect YouTube link using Regex
      const youtubeRegex =
        /(https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_\-]+))/g;
      const match = youtubeRegex.exec(messageValue);

      if (match && match[1]) {
        const youtubeEmbedUrl = `https://www.youtube.com/embed/${match[2]}`;
        const iframe = `<iframe width="100%" height="315px" src="${youtubeEmbedUrl}" frameborder="0" allowfullscreen></iframe>`;

        messageValue = messageValue.split(match[1]).join(match[1] + iframe);
      }

      const newDiv = $("<div></div>")
        .addClass("col-4 offset-4 rounded mb-3 " + color)
        .html(messageValue);

      $(".messages").append(newDiv);
      $("#message").val("");
    }
  });
});
