import { useState } from "react";

const loremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta
      aliquet rutrum. Morbi feugiat at risus quis iaculis. Vivamus a velit sed
      mi facilisis posuere. Donec tempus lacus ut nibh iaculis, iaculis
      hendrerit ante vehicula. Sed sollicitudin nunc in tortor faucibus, sed
      tincidunt lacus efficitur. Morbi lacinia, tellus nec feugiat pharetra,
      tortor orci maximus felis, pretium pharetra purus nulla vitae felis.
      Aliquam iaculis ultrices augue, nec molestie orci sollicitudin a. Aenean
      rhoncus lacinia consequat. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Nulla rutrum lorem maximus orci tempor, eget maximus quam
      aliquam. Aliquam tincidunt, augue a ultricies accumsan, dolor urna maximus
      nibh, quis mattis sapien sapien in urna. Sed malesuada elit vitae suscipit
      efficitur. Nunc justo est, consequat vitae enim sed, accumsan faucibus
      nibh. Donec et massa ullamcorper dolor semper tincidunt sit amet at lorem.
      Quisque molestie magna tellus, at tempor enim aliquet eget. Interdum et
      malesuada fames ac ante ipsum primis in faucibus. Duis ut fermentum lorem.
      Sed pellentesque auctor ex sed congue. Vivamus mattis id tortor in
      condimentum. Curabitur at consequat nisl. Morbi ut tempus nisl, quis
      auctor nunc. Ut volutpat interdum tortor, vitae elementum enim sagittis
      sed. Nullam vel mi lorem. Morbi fermentum dolor ipsum, vel consequat est
      fringilla eu. Aliquam facilisis arcu sed interdum feugiat. Pellentesque
      mattis tincidunt nibh, vitae pulvinar nunc bibendum facilisis. Integer eu
      facilisis diam. Duis eros enim, tristique ac eros rhoncus, sodales auctor
      sem. Aenean semper, neque at ullamcorper vehicula, elit nunc lobortis
      tellus, eu porttitor ipsum lacus in velit. Aliquam lorem lectus, interdum
      eu ultrices ultrices, placerat sed est. Vestibulum ante ipsum primis in
      faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse
      viverra in urna interdum pretium. Nam scelerisque molestie nisi. In
      faucibus faucibus lacinia. Phasellus tempus lacinia lacus sagittis
      ultrices. Vivamus eu eleifend tellus. Proin commodo nisi eu nisi euismod,
      sed aliquet velit eleifend. Nulla facilisi. Quisque facilisis auctor
      mauris, luctus molestie mauris. Vestibulum varius vel lacus quis aliquam.
      Quisque ultrices, neque eget molestie cursus, ligula lorem iaculis felis,
      ut feugiat erat nulla a leo. Fusce felis metus, semper faucibus accumsan
      quis, semper in ligula. Sed convallis sollicitudin orci, vel suscipit
      dolor venenatis a. Mauris vestibulum egestas scelerisque. Curabitur ac sem
      feugiat, pretium ante ac, commodo sapien. Fusce vitae mollis est. Nullam
      nec pellentesque urna. Maecenas sit amet ipsum ligula. Fusce quis lorem
      ornare, mollis mi vitae, fringilla tortor. Ut ornare ac risus dapibus
      dapibus. Quisque ullamcorper pretium sapien, at volutpat ante efficitur
      at. Sed egestas orci ac neque rhoncus ornare. Proin id sapien volutpat,
      vehicula lacus ac, vestibulum metus. Donec vitae tincidunt arcu. Donec et
      ante at nisi egestas fringilla quis ut neque. Sed consectetur nibh eget
      nibh gravida pharetra. Etiam a bibendum nulla. Quisque porttitor
      ullamcorper elit dignissim tempor. Sed facilisis fermentum felis, eget
      consectetur libero consectetur non. Fusce ultrices egestas volutpat. In et
      ligula quam. Ut dictum sollicitudin egestas. Curabitur quis aliquam arcu.
      Praesent eget augue sem. Mauris lorem ipsum, sollicitudin nec congue sit
      amet, ullamcorper ac odio. Ut fermentum quam id sagittis lobortis. Aliquam
      finibus risus sed placerat convallis. Proin ante augue, convallis sed
      tempor vel, lobortis eget dolor. Etiam venenatis nunc ac lorem dignissim
      dignissim. Integer non odio volutpat, rutrum nisi sed, condimentum leo.
      Mauris volutpat, leo mollis ultrices elementum, felis odio consectetur
      turpis, non posuere neque risus ac nulla.
`;

function ExpandableText() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <p>{isExpanded ? loremIpsum : loremIpsum.substring(0, 25) + "..."}</p>
      <button
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        {isExpanded ? "Less" : "More"}
      </button>
    </>
  );
}

export default ExpandableText;
