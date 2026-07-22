# 09 — Body-Copy Audit (Round F prep)

Read-only inventory of body text on public routes. Titles/labels handled in Round F. Only rows needing action (english / commerce-remnant / placeholder) are listed; `already-dutch` rows are summarised in counts.

## Legend

- **state**: `english` · `commerce-remnant` · `already-dutch` · `placeholder`
- **length**: `fixed` = heading/button/label/badge/link (character budget matters) · `flowing` = paragraph/blockquote/list-item (Dutch may run longer)
- **action**: `translate-nl` · `rewrite-neutral` (strip commerce framing) · `keep-placeholder`

## Summary counts

| route | english | commerce | already-dutch | placeholder |
|---|---:|---:|---:|---:|
| / | 26 | 3 | 103 | 0 |
| /about | 22 | 6 | 83 | 0 |
| /heritage | 18 | 6 | 87 | 0 |
| /heritage/upcoming | 14 | 2 | 59 | 0 |
| /heritage/details | 33 | 4 | 73 | 0 |
| /artists | 3 | 0 | 76 | 0 |
| /artists/portfolio | 35 | 2 | 82 | 0 |
| /organizations | 3 | 0 | 76 | 0 |
| /organizations/details | 35 | 2 | 82 | 0 |
| /events | 9 | 0 | 67 | 0 |
| /events/details | 18 | 0 | 67 | 0 |
| /media | 22 | 2 | 61 | 0 |
| /stories | 9 | 0 | 67 | 0 |
| /stories/details | 18 | 0 | 67 | 0 |
| /collections/$slug | 22 | 2 | 61 | 0 |
| /contact | 4 | 1 | 60 | 0 |
| /faq | 4 | 20 | 59 | 0 |
| /search | 22 | 2 | 61 | 0 |
| /accessibility | 5 | 2 | 55 | 0 |
| /privacy | 5 | 2 | 55 | 0 |
| /terms | 7 | 4 | 56 | 0 |
| /$ (404) | 13 | 4 | 87 | 0 |
| **TOTAL** | **347** | **64** | **1544** | **0** |

## Per-route findings

### /  (index.tsx)

| tag | section / first ~12 words | state | length | action |
|---|---|---|---|---|
| `<p>` | Unlock a world of imagination with our curated collection of original artworks. | english | flowing | translate-nl |
| `<p>` | Join us for an exhilarating live auction experience where art meets excitement. | commerce-remnant | flowing | rewrite-neutral |
| `<p>` | At Artmart, we are passionate art enthusiasts dedicated to connecting artists and\n … | commerce-remnant | flowing | rewrite-neutral |
| `<p>` | An Art Action Company typically operates in the space of live art, … | english | flowing | translate-nl |
| `<h1>` | Discover, Bid, and Collect Art from Around the World | commerce-remnant | fixed | rewrite-neutral |
| `<h6>` | More than just artâit's a feeling \n | english | fixed | translate-nl |
| `<h6>` | A masterpiece that invites you to\n dream | english | fixed | translate-nl |
| `<h6>` | A work of art that sparks your\n imagination | english | fixed | translate-nl |
| `<h6>` | Whispers of Solitude of a Forgotten\n City | english | fixed | translate-nl |
| `<h6>` | The Last Light Echoes of My Youth \n | english | fixed | translate-nl |
| `<h6>` | A brushstroke of serenity in a chaotic\n world | english | fixed | translate-nl |
| `<h6>` | Dancing Colors on a Summer Breeze \n | english | fixed | translate-nl |
| `<h6>` | The Last Light Echoes of My Youth\n | english | fixed | translate-nl |
| `<h6>` | Sighs of Isolation from a Lost\n City | english | fixed | translate-nl |
| `<h6>` | Bright Colors on the Summer Wind \n | english | fixed | translate-nl |
| `<h6>` | The Final Rays of Light from My\n Childhood | english | fixed | translate-nl |
| `<h6>` | The Shining Day Remnants of My Early\n Years | english | fixed | translate-nl |
| `<h6>` | The Last Light of a Forgotten City\n Breaking | english | fixed | translate-nl |
| `<h6>` | Art as Therapy: Creativity for Mental\n Wellness | english | fixed | translate-nl |
| `<h6>` | How Art Reflects and Influences\n Modern Culture | english | fixed | translate-nl |
| `<h6>` | Insights into the Creative Process of\n Artists | english | fixed | translate-nl |
| `<h6>` | Spotlighting Emerging Artists Making\n Their Mark | english | fixed | translate-nl |
| `<h6>` | The Impact of Technology on Todayâs\n Art | english | fixed | translate-nl |
| `<span>` | Learn More | english | fixed | translate-nl |
| `<a>` | More than just artâit's a feeling | english | fixed | translate-nl |
| `<a>` | The Last Light Echoes of My Youth | english | fixed | translate-nl |
| `<a>` | Dancing Colors on a Summer Breeze | english | fixed | translate-nl |
| `<a>` | Bright Colors on the Summer Wind | english | fixed | translate-nl |
| `<a>` | \n \n \n \n Learn More \n | english | fixed | translate-nl |

### /about  (about.tsx)

| tag | section / first ~12 words | state | length | action |
|---|---|---|---|---|
| `<p>` | At Artmart, we are passionate art enthusiasts dedicated to connecting artists and … | commerce-remnant | flowing | rewrite-neutral |
| `<p>` | At Artmart, our mission is to revolutionize the art experience We are … | commerce-remnant | flowing | rewrite-neutral |
| `<p>` | We believe that art has the power to inspire, transform, and connect … | english | flowing | translate-nl |
| `<p>` | A group of passionate art collectors and tech innovators, the company set … | english | flowing | translate-nl |
| `<p>` | The first online auction was launched in early 2011, featuring a curated … | commerce-remnant | flowing | rewrite-neutral |
| `<p>` | By 2013, had expanded its offerings to include a diverse range of … | english | flowing | translate-nl |
| `<p>` | In 2021, the platform launched an initiative to support emerging artists, offering … | english | flowing | translate-nl |
| `<p>` | By 2017, the platform had established itself as a leader in the … | commerce-remnant | flowing | rewrite-neutral |
| `<p>` | As of 2023, remains committed to its founding vision while continuing to … | english | flowing | translate-nl |
| `<p>` | An unparalleled art auction experience where quality, integrity, and passion for art … | commerce-remnant | flowing | rewrite-neutral |
| `<p>` | supporting their creative endeavors them continue to produce extraordinary works.\n | english | flowing | translate-nl |
| `<p>` | We connect artists and collectors from around the world | english | flowing | translate-nl |
| `<p>` | Our website is designed for ease of use | english | flowing | translate-nl |
| `<p>` | Join us for an exhilarating live auction experience where art meets\n excitement. | commerce-remnant | flowing | rewrite-neutral |
| `<p>` | An Art Action Company typically operates in the space of live art, … | english | flowing | translate-nl |
| `<h3>` | Our Artistic Endeavor | english | fixed | translate-nl |
| `<h3>` | The Story Behind Us | english | fixed | translate-nl |
| `<h3>` | What Makes Us Special | english | fixed | translate-nl |
| `<h5>` | The Vision Takes Shape | english | fixed | translate-nl |
| `<h5>` | Expanding the Horizon | english | fixed | translate-nl |
| `<h5>` | Supporting Emerging Artists | english | fixed | translate-nl |
| `<h5>` | Continuing the Legacy | english | fixed | translate-nl |
| `<h5>` | Support Artists | english | fixed | translate-nl |
| `<li>` | \n \n \n \n Empowering Artists\n | english | flowing | translate-nl |
| `<li>` | \n \n \n \n \n \n \n \n \n \n \n Support … | english | flowing | translate-nl |
| `<li>` | \n \n \n \n \n \n \n \n \n \n Secure Transactions … | english | flowing | translate-nl |
| `<li>` | \n \n \n \n \n \n \n User-Friendly Platform \n Our website … | english | flowing | translate-nl |
| `<li>` | \n \n \n \n \n \n \n Seamless Experience \n We connect … | english | flowing | translate-nl |

### /heritage  (heritage.index.tsx)

| tag | section / first ~12 words | state | length | action |
|---|---|---|---|---|
| `<p>` | An art catalog is a curated assembly of artworks gathered by an … | english | flowing | translate-nl |
| `<p>` | An Art Action Company typically operates in the space of live art, … | english | flowing | translate-nl |
| `<h5>` | Shop Catalog | commerce-remnant | fixed | rewrite-neutral |
| `<h5>` | Artist Name | english | fixed | translate-nl |
| `<h5>` | Price Filter | commerce-remnant | fixed | rewrite-neutral |
| `<h6>` | Showing 09 of 12 results | english | fixed | translate-nl |
| `<h6>` | A masterpiece that invites you to dream \n | english | fixed | translate-nl |
| `<h6>` | More than just art—it's a feeling | english | fixed | translate-nl |
| `<h6>` | The Last Light Echoes of My Youth | english | fixed | translate-nl |
| `<h6>` | Whispers of Solitude of a Forgotten City \n | english | fixed | translate-nl |
| `<h6>` | A brushstroke of serenity in a chaotic\n world \n | english | fixed | translate-nl |
| `<h6>` | Dancing Colors on a Summer Breeze | english | fixed | translate-nl |
| `<h6>` | An invitation to explore the unseen | english | fixed | translate-nl |
| `<h6>` | Where imagination meets the canvas | english | fixed | translate-nl |
| `<span>` | Upcoming Auction Art | commerce-remnant | fixed | rewrite-neutral |
| `<span>` | Print and Multiples | english | fixed | translate-nl |
| `<span>` | Bidding Start | commerce-remnant | fixed | rewrite-neutral |
| `<a>` | See More | english | fixed | translate-nl |
| `<a>` | \n Bidding Start \n \n | commerce-remnant | fixed | rewrite-neutral |
| `<a>` | A masterpiece that invites you to dream | english | fixed | translate-nl |
| `<a>` | Whispers of Solitude of a Forgotten City | english | fixed | translate-nl |
| `<a>` | A brushstroke of serenity in a chaotic\n world | english | fixed | translate-nl |
| `<li>` | \n \n \n \n Upcoming Auction Art \n \n | commerce-remnant | flowing | rewrite-neutral |
| `<li>` | \n \n \n \n Print and Multiples \n \n | english | flowing | translate-nl |

### /heritage/upcoming  (heritage.upcoming.tsx)

| tag | section / first ~12 words | state | length | action |
|---|---|---|---|---|
| `<p>` | An art catalog is a curated assembly of artworks gathered by an … | english | flowing | translate-nl |
| `<p>` | An Art Action Company typically operates in the space of live art, … | english | flowing | translate-nl |
| `<h5>` | Shop Catalog | commerce-remnant | fixed | rewrite-neutral |
| `<h5>` | Artist Name | english | fixed | translate-nl |
| `<h5>` | Price Filter | commerce-remnant | fixed | rewrite-neutral |
| `<h6>` | Showing 09 of 12 results | english | fixed | translate-nl |
| `<h6>` | Bright Colors on the Summer Wind | english | fixed | translate-nl |
| `<h6>` | Sighs of Isolation from a Lost City | english | fixed | translate-nl |
| `<h6>` | The Final Rays of Light from My Childhood \n | english | fixed | translate-nl |
| `<h6>` | Dancing Colors on a Summer Breeze | english | fixed | translate-nl |
| `<h6>` | The Last Light Echoes of My Youth | english | fixed | translate-nl |
| `<h6>` | Whispers of Solitude of a Forgotten City \n | english | fixed | translate-nl |
| `<h6>` | The Shining Day Remnants of My Early\n Years | english | fixed | translate-nl |
| `<a>` | See More | english | fixed | translate-nl |
| `<a>` | The Final Rays of Light from My Childhood | english | fixed | translate-nl |
| `<a>` | Whispers of Solitude of a Forgotten City | english | fixed | translate-nl |

### /heritage/details  (heritage.details.tsx)

| tag | section / first ~12 words | state | length | action |
|---|---|---|---|---|
| `<p>` | Born on July 6, 1907, and passed away on July 13, 1954 | english | flowing | translate-nl |
| `<p>` | She Known for her surrealist and symbolic style | english | flowing | translate-nl |
| `<p>` | "The Two Fridas" (1939), "Self-Portrait with Thorn Necklace and Hummingbird"\n (1940),\n and … | english | flowing | translate-nl |
| `<p>` | Not Frame | english | flowing | translate-nl |
| `<p>` | Nature and Animals | english | flowing | translate-nl |
| `<p>` | Signed by Artist | english | flowing | translate-nl |
| `<p>` | Includes Certificate of Authenticity for auction. | commerce-remnant | flowing | rewrite-neutral |
| `<p>` | This Artworks often delve into personal and emotional experiences, so these terms\n … | english | flowing | translate-nl |
| `<p>` | An Art Action Company typically operates in the space of live art, … | english | flowing | translate-nl |
| `<h5>` | Artist Overview | english | fixed | translate-nl |
| `<h5>` | Exploring the Artwork | english | fixed | translate-nl |
| `<h6>` | Date of Birth and death | english | fixed | translate-nl |
| `<h6>` | Inner Narrative Of This Artwork | english | fixed | translate-nl |
| `<h6>` | Guidelines for The Art work : | english | fixed | translate-nl |
| `<h6>` | More than just art—it's a feeling \n | english | fixed | translate-nl |
| `<h6>` | A masterpiece that invites you to\n dream | english | fixed | translate-nl |
| `<h6>` | A work of art that sparks your\n imagination | english | fixed | translate-nl |
| `<h6>` | Whispers of Solitude of a Forgotten\n City | english | fixed | translate-nl |
| `<h6>` | The Last Light Echoes of My Youth \n | english | fixed | translate-nl |
| `<h6>` | A brushstroke of serenity in a\n chaotic\n world | english | fixed | translate-nl |
| `<h6>` | Dancing Colors on a Summer Breeze \n | english | fixed | translate-nl |
| `<span>` | Bidding Start | commerce-remnant | fixed | rewrite-neutral |
| `<a>` | More than just art—it's a feeling | english | fixed | translate-nl |
| `<a>` | \n Bidding Start \n \n | commerce-remnant | fixed | rewrite-neutral |
| `<a>` | The Last Light Echoes of My Youth | english | fixed | translate-nl |
| `<a>` | Dancing Colors on a Summer Breeze | english | fixed | translate-nl |
| `<li>` | \n Date of Birth and death \n Born on July 6, 1907, … | english | flowing | translate-nl |
| `<li>` | \n Style \n She Known for her surrealist and symbolic style \n | english | flowing | translate-nl |
| `<li>` | \n Notable work \n "The Two Fridas" (1939), "Self-Portrait with Thorn Necklace … | english | flowing | translate-nl |
| `<li>` | \n Framing : \n Not Frame \n | english | flowing | translate-nl |
| `<li>` | \n Theme : \n Nature and Animals \n | english | flowing | translate-nl |
| `<li>` | \n Signature : \n Signed by Artist \n | english | flowing | translate-nl |
| `<li>` | \n Authenticity : \n Includes Certificate of Authenticity for auction. \n | commerce-remnant | flowing | rewrite-neutral |
| `<li>` | \n Inner Narrative Of This Artwork \n This Artworks often delve into … | english | flowing | translate-nl |
| `<li>` | Framing the artwork/painting | english | flowing | translate-nl |
| `<li>` | Keep the painting away from direct sunlight | english | flowing | translate-nl |
| `<li>` | Dust the surface gently with a soft dry brush or cloth | english | flowing | translate-nl |

### /artists  (artists.index.tsx)

| tag | section / first ~12 words | state | length | action |
|---|---|---|---|---|
| `<p>` | An art catalog is a curated assembly of artworks gathered by an … | english | flowing | translate-nl |
| `<p>` | An Art Action Company typically operates in the space of live art, … | english | flowing | translate-nl |
| `<h1>` | Feature Artists | english | fixed | translate-nl |

### /artists/portfolio  (artists.portfolio.tsx)

| tag | section / first ~12 words | state | length | action |
|---|---|---|---|---|
| `<p>` | Frida Kahlo (1907-1954) was a pioneering Mexican artist renowned for her deeply\n … | english | flowing | translate-nl |
| `<p>` | Frida Kahlo (1907-1954) was a Mexican\n painter known for her\n distinctive, vibrant … | english | flowing | translate-nl |
| `<p>` | Birth: Born on July 6, 1907, in Coyoacán, Mexico\n City. | english | flowing | translate-nl |
| `<p>` | Health Issues: Experienced polio as a child and\n a severe bus accident … | english | flowing | translate-nl |
| `<p>` | Style: Known for her surrealist and symbolic\n style, her work often includes … | english | flowing | translate-nl |
| `<p>` | Notable Works: Some of her most famous works\n include "The Two Fridas" … | english | flowing | translate-nl |
| `<p>` | Marriage: Married fellow artist Diego Rivera in\n 1931. Their tumultuous relationship and … | english | flowing | translate-nl |
| `<p>` | Political Activism: Actively involved in leftist\n politics and supported the Mexican Communist … | english | flowing | translate-nl |
| `<p>` | Influence: Kahlo’s work has had a lasting impact\n on art, particularly in … | english | flowing | translate-nl |
| `<p>` | Museum: The Frida Kahlo Museum, also known as La\n Casa Azul (The … | english | flowing | translate-nl |
| `<p>` | Mexican artist | english | flowing | translate-nl |
| `<p>` | Self Portraits, Mexican Culture and Folklore, Surrealism,\n Politics and Social Issues, Nature … | english | flowing | translate-nl |
| `<p>` | Identity, postcolonialism, gender, class, and race in Mexican\n society. | english | flowing | translate-nl |
| `<p>` | Frida Kahlo did not receive many formal awards during her lifetime, as\n … | english | flowing | translate-nl |
| `<p>` | Site Of The Day | english | flowing | translate-nl |
| `<p>` | Site Of The Month | english | flowing | translate-nl |
| `<p>` | An Art Action Company typically operates in the space of live art, … | english | flowing | translate-nl |
| `<h4>` | Early Life and Background | english | fixed | translate-nl |
| `<h4>` | National Prize of Arts and Sciences(Mexico) | english | fixed | translate-nl |
| `<h5>` | Artist Name | english | fixed | translate-nl |
| `<h6>` | The Two Fridas \n | english | fixed | translate-nl |
| `<h6>` | Memory The Heart \n | english | fixed | translate-nl |
| `<h6>` | Self-Portrait With\n Birds \n | english | fixed | translate-nl |
| `<h6>` | Self Portrait With\n Monkey \n | english | fixed | translate-nl |
| `<h6>` | Self-Portrait With\n Cat \n | english | fixed | translate-nl |
| `<span>` | Bidding will Started : | commerce-remnant | fixed | rewrite-neutral |
| `<a>` | See More | english | fixed | translate-nl |
| `<a>` | The Two Fridas | english | fixed | translate-nl |
| `<a>` | Memory The Heart | english | fixed | translate-nl |
| `<a>` | Self-Portrait With\n Birds | english | fixed | translate-nl |
| `<a>` | Self Portrait With\n Monkey | english | fixed | translate-nl |
| `<a>` | Self-Portrait With\n Cat | english | fixed | translate-nl |
| `<li>` | Bidding will Started : $200.00 | commerce-remnant | flowing | rewrite-neutral |
| `<li>` | \n \n 1946 \n National Prize of Arts and Sciences(Mexico) \n Site … | english | flowing | translate-nl |
| `<li>` | \n \n 1970 \n Turner Prize (UK) \n Site Of The Month … | english | flowing | translate-nl |
| `<li>` | \n \n 1946 \n Praemium Imperiale (Japan) \n Site Of The Month … | english | flowing | translate-nl |
| `<li>` | \n \n 1946 \n Turner Prize (UK) \n Site Of The Month … | english | flowing | translate-nl |

### /organizations  (organizations.index.tsx)

| tag | section / first ~12 words | state | length | action |
|---|---|---|---|---|
| `<p>` | An art catalog is a curated assembly of artworks gathered by an … | english | flowing | translate-nl |
| `<p>` | An Art Action Company typically operates in the space of live art, … | english | flowing | translate-nl |
| `<h1>` | Feature Artists | english | fixed | translate-nl |

### /organizations/details  (organizations.details.tsx)

| tag | section / first ~12 words | state | length | action |
|---|---|---|---|---|
| `<p>` | Frida Kahlo (1907-1954) was a pioneering Mexican artist renowned for her deeply\n … | english | flowing | translate-nl |
| `<p>` | Frida Kahlo (1907-1954) was a Mexican\n painter known for her\n distinctive, vibrant … | english | flowing | translate-nl |
| `<p>` | Birth: Born on July 6, 1907, in Coyoacán, Mexico\n City. | english | flowing | translate-nl |
| `<p>` | Health Issues: Experienced polio as a child and\n a severe bus accident … | english | flowing | translate-nl |
| `<p>` | Style: Known for her surrealist and symbolic\n style, her work often includes … | english | flowing | translate-nl |
| `<p>` | Notable Works: Some of her most famous works\n include "The Two Fridas" … | english | flowing | translate-nl |
| `<p>` | Marriage: Married fellow artist Diego Rivera in\n 1931. Their tumultuous relationship and … | english | flowing | translate-nl |
| `<p>` | Political Activism: Actively involved in leftist\n politics and supported the Mexican Communist … | english | flowing | translate-nl |
| `<p>` | Influence: Kahlo’s work has had a lasting impact\n on art, particularly in … | english | flowing | translate-nl |
| `<p>` | Museum: The Frida Kahlo Museum, also known as La\n Casa Azul (The … | english | flowing | translate-nl |
| `<p>` | Mexican artist | english | flowing | translate-nl |
| `<p>` | Self Portraits, Mexican Culture and Folklore, Surrealism,\n Politics and Social Issues, Nature … | english | flowing | translate-nl |
| `<p>` | Identity, postcolonialism, gender, class, and race in Mexican\n society. | english | flowing | translate-nl |
| `<p>` | Frida Kahlo did not receive many formal awards during her lifetime, as\n … | english | flowing | translate-nl |
| `<p>` | Site Of The Day | english | flowing | translate-nl |
| `<p>` | Site Of The Month | english | flowing | translate-nl |
| `<p>` | An Art Action Company typically operates in the space of live art, … | english | flowing | translate-nl |
| `<h4>` | Early Life and Background | english | fixed | translate-nl |
| `<h4>` | National Prize of Arts and Sciences(Mexico) | english | fixed | translate-nl |
| `<h5>` | Artist Name | english | fixed | translate-nl |
| `<h6>` | The Two Fridas \n | english | fixed | translate-nl |
| `<h6>` | Memory The Heart \n | english | fixed | translate-nl |
| `<h6>` | Self-Portrait With\n Birds \n | english | fixed | translate-nl |
| `<h6>` | Self Portrait With\n Monkey \n | english | fixed | translate-nl |
| `<h6>` | Self-Portrait With\n Cat \n | english | fixed | translate-nl |
| `<span>` | Bidding will Started : | commerce-remnant | fixed | rewrite-neutral |
| `<a>` | See More | english | fixed | translate-nl |
| `<a>` | The Two Fridas | english | fixed | translate-nl |
| `<a>` | Memory The Heart | english | fixed | translate-nl |
| `<a>` | Self-Portrait With\n Birds | english | fixed | translate-nl |
| `<a>` | Self Portrait With\n Monkey | english | fixed | translate-nl |
| `<a>` | Self-Portrait With\n Cat | english | fixed | translate-nl |
| `<li>` | Bidding will Started : $200.00 | commerce-remnant | flowing | rewrite-neutral |
| `<li>` | \n \n 1946 \n National Prize of Arts and Sciences(Mexico) \n Site … | english | flowing | translate-nl |
| `<li>` | \n \n 1970 \n Turner Prize (UK) \n Site Of The Month … | english | flowing | translate-nl |
| `<li>` | \n \n 1946 \n Praemium Imperiale (Japan) \n Site Of The Month … | english | flowing | translate-nl |
| `<li>` | \n \n 1946 \n Turner Prize (UK) \n Site Of The Month … | english | flowing | translate-nl |

### /events  (events.index.tsx)

| tag | section / first ~12 words | state | length | action |
|---|---|---|---|---|
| `<p>` | An Art Action Company typically operates in the space of live art, … | english | flowing | translate-nl |
| `<h6>` | The Last Light of a Forgotten City\n Breaking | english | fixed | translate-nl |
| `<h6>` | How Art Reflects and Influences\n Modern Culture | english | fixed | translate-nl |
| `<h6>` | Art as Therapy: Creativity for Mental\n Wellness | english | fixed | translate-nl |
| `<h6>` | Spotlighting Emerging Artists Making\n Their Mark | english | fixed | translate-nl |
| `<h6>` | The Impact of Technology on Today’s\n Art | english | fixed | translate-nl |
| `<h6>` | Eco-Friendly Art Practices for a Sustainable\n Future | english | fixed | translate-nl |
| `<h6>` | How Artists Tell Stories Through Their Work | english | fixed | translate-nl |
| `<h6>` | Insights into the Creative Process of\n Artists | english | fixed | translate-nl |

### /events/details  (events.details.tsx)

| tag | section / first ~12 words | state | length | action |
|---|---|---|---|---|
| `<p>` | Art reflects and influences modern culture by acting as a mirror and … | english | flowing | translate-nl |
| `<p>` | Capturing the essence of societal values, trends, and challenges. Through various mediums,\n … | english | flowing | translate-nl |
| `<p>` | As we reflect on this moment, we express our deepest gratitude to … | english | flowing | translate-nl |
| `<p>` | Art reflects and influences modern culture by acting as a mirror\n and … | english | flowing | translate-nl |
| `<p>` | Art reflects and influences modern culture by acting as a\n mirror and … | english | flowing | translate-nl |
| `<p>` | An Art Action Company typically operates in the space of live art, … | english | flowing | translate-nl |
| `<h4>` | Leave Your Comment: | english | fixed | translate-nl |
| `<h6>` | The Last Light of a Forgotten City Breaking\n | english | fixed | translate-nl |
| `<h6>` | Art as Therapy: Creativity for Mental\n Wellness | english | fixed | translate-nl |
| `<span>` | The Art of Storytelling: How Artists Convey Narratives Through Their\n Work | english | fixed | translate-nl |
| `<span>` | Exploring the World of Contemporary Art: Trends and Insights How Art\n Reflects … | english | fixed | translate-nl |
| `<span>` | Masterpieces Under the Hammer: A Guide to Upcoming Art Auctions | english | fixed | translate-nl |
| `<span>` | The Role of Art in Mental Well-Being: Creativity as Therapy How\n Artists … | english | fixed | translate-nl |
| `<li>` | \n \n \n \n \n \n \n The Art of Storytelling: How … | english | flowing | translate-nl |
| `<li>` | \n \n \n \n \n \n \n Exploring the World of Contemporary … | english | flowing | translate-nl |
| `<li>` | \n \n \n \n \n \n \n Masterpieces Under the Hammer: A … | english | flowing | translate-nl |
| `<li>` | \n \n \n \n \n \n \n The Role of Art in … | english | flowing | translate-nl |
| `<li>` | \n \n \n \n \n \n \n mr. sumon Halder. \n 31 … | english | flowing | translate-nl |

### /media  (media.tsx)

| tag | section / first ~12 words | state | length | action |
|---|---|---|---|---|
| `<p>` | An art catalog is a curated assembly of artworks gathered by an … | english | flowing | translate-nl |
| `<p>` | An Art Action Company typically operates in the space of live art, … | english | flowing | translate-nl |
| `<h5>` | Shop Catalog | commerce-remnant | fixed | rewrite-neutral |
| `<h5>` | Artist Name | english | fixed | translate-nl |
| `<h5>` | Price Filter | commerce-remnant | fixed | rewrite-neutral |
| `<h6>` | Showing 09 of 12 results | english | fixed | translate-nl |
| `<h6>` | Bright Colors on the Summer Wind | english | fixed | translate-nl |
| `<h6>` | Sighs of Isolation from a Lost City \n | english | fixed | translate-nl |
| `<h6>` | The Final Rays of Light from My\n Childhood \n | english | fixed | translate-nl |
| `<h6>` | Dancing Colors on a Summer Breeze \n | english | fixed | translate-nl |
| `<h6>` | The Last Light Echoes of My Youth \n | english | fixed | translate-nl |
| `<h6>` | Whispers of Solitude of a Forgotten City \n | english | fixed | translate-nl |
| `<h6>` | The Shining Day Remnants of My Early Years | english | fixed | translate-nl |
| `<a>` | See More | english | fixed | translate-nl |
| `<a>` | Sighs of Isolation from a Lost City | english | fixed | translate-nl |
| `<a>` | The Final Rays of Light from My\n Childhood | english | fixed | translate-nl |
| `<a>` | Dancing Colors on a Summer Breeze | english | fixed | translate-nl |
| `<a>` | The Last Light Echoes of My Youth | english | fixed | translate-nl |
| `<a>` | Whispers of Solitude of a Forgotten City | english | fixed | translate-nl |
| `<li>` | /li>\n \n \n Bekijk record \n \n \n \n \n \n \n … | english | flowing | translate-nl |
| `<li>` | /li>\n \n \n Bekijk record \n \n \n \n \n \n \n … | english | flowing | translate-nl |
| `<li>` | /li>\n \n \n Bekijk record \n \n \n \n \n \n \n … | english | flowing | translate-nl |
| `<li>` | /li>\n \n \n Bekijk record \n \n \n \n \n \n \n … | english | flowing | translate-nl |
| `<li>` | /li>\n \n \n Bekijk record \n \n \n \n \n \n \n … | english | flowing | translate-nl |

### /stories  (stories.index.tsx)

| tag | section / first ~12 words | state | length | action |
|---|---|---|---|---|
| `<p>` | An Art Action Company typically operates in the space of live art, … | english | flowing | translate-nl |
| `<h6>` | The Last Light of a Forgotten City\n Breaking | english | fixed | translate-nl |
| `<h6>` | How Art Reflects and Influences\n Modern Culture | english | fixed | translate-nl |
| `<h6>` | Art as Therapy: Creativity for Mental\n Wellness | english | fixed | translate-nl |
| `<h6>` | Spotlighting Emerging Artists Making\n Their Mark | english | fixed | translate-nl |
| `<h6>` | The Impact of Technology on Today’s\n Art | english | fixed | translate-nl |
| `<h6>` | Eco-Friendly Art Practices for a Sustainable\n Future | english | fixed | translate-nl |
| `<h6>` | How Artists Tell Stories Through Their Work | english | fixed | translate-nl |
| `<h6>` | Insights into the Creative Process of\n Artists | english | fixed | translate-nl |

### /stories/details  (stories.details.tsx)

| tag | section / first ~12 words | state | length | action |
|---|---|---|---|---|
| `<p>` | Art reflects and influences modern culture by acting as a mirror and … | english | flowing | translate-nl |
| `<p>` | Capturing the essence of societal values, trends, and challenges. Through various mediums,\n … | english | flowing | translate-nl |
| `<p>` | As we reflect on this moment, we express our deepest gratitude to … | english | flowing | translate-nl |
| `<p>` | Art reflects and influences modern culture by acting as a mirror\n and … | english | flowing | translate-nl |
| `<p>` | Art reflects and influences modern culture by acting as a\n mirror and … | english | flowing | translate-nl |
| `<p>` | An Art Action Company typically operates in the space of live art, … | english | flowing | translate-nl |
| `<h4>` | Leave Your Comment: | english | fixed | translate-nl |
| `<h6>` | The Last Light of a Forgotten City Breaking\n | english | fixed | translate-nl |
| `<h6>` | Art as Therapy: Creativity for Mental\n Wellness | english | fixed | translate-nl |
| `<span>` | The Art of Storytelling: How Artists Convey Narratives Through Their\n Work | english | fixed | translate-nl |
| `<span>` | Exploring the World of Contemporary Art: Trends and Insights How Art\n Reflects … | english | fixed | translate-nl |
| `<span>` | Masterpieces Under the Hammer: A Guide to Upcoming Art Auctions | english | fixed | translate-nl |
| `<span>` | The Role of Art in Mental Well-Being: Creativity as Therapy How\n Artists … | english | fixed | translate-nl |
| `<li>` | \n \n \n \n \n \n \n The Art of Storytelling: How … | english | flowing | translate-nl |
| `<li>` | \n \n \n \n \n \n \n Exploring the World of Contemporary … | english | flowing | translate-nl |
| `<li>` | \n \n \n \n \n \n \n Masterpieces Under the Hammer: A … | english | flowing | translate-nl |
| `<li>` | \n \n \n \n \n \n \n The Role of Art in … | english | flowing | translate-nl |
| `<li>` | \n \n \n \n \n \n \n mr. sumon Halder. \n 31 … | english | flowing | translate-nl |

### /collections/$slug  (collections.$slug.tsx)

| tag | section / first ~12 words | state | length | action |
|---|---|---|---|---|
| `<p>` | An art catalog is a curated assembly of artworks gathered by an … | english | flowing | translate-nl |
| `<p>` | An Art Action Company typically operates in the space of live art, … | english | flowing | translate-nl |
| `<h5>` | Shop Catalog | commerce-remnant | fixed | rewrite-neutral |
| `<h5>` | Artist Name | english | fixed | translate-nl |
| `<h5>` | Price Filter | commerce-remnant | fixed | rewrite-neutral |
| `<h6>` | Showing 09 of 12 results | english | fixed | translate-nl |
| `<h6>` | Bright Colors on the Summer Wind | english | fixed | translate-nl |
| `<h6>` | Sighs of Isolation from a Lost City \n | english | fixed | translate-nl |
| `<h6>` | The Final Rays of Light from My\n Childhood \n | english | fixed | translate-nl |
| `<h6>` | Dancing Colors on a Summer Breeze \n | english | fixed | translate-nl |
| `<h6>` | The Last Light Echoes of My Youth \n | english | fixed | translate-nl |
| `<h6>` | Whispers of Solitude of a Forgotten City \n | english | fixed | translate-nl |
| `<h6>` | The Shining Day Remnants of My Early Years | english | fixed | translate-nl |
| `<a>` | See More | english | fixed | translate-nl |
| `<a>` | Sighs of Isolation from a Lost City | english | fixed | translate-nl |
| `<a>` | The Final Rays of Light from My\n Childhood | english | fixed | translate-nl |
| `<a>` | Dancing Colors on a Summer Breeze | english | fixed | translate-nl |
| `<a>` | The Last Light Echoes of My Youth | english | fixed | translate-nl |
| `<a>` | Whispers of Solitude of a Forgotten City | english | fixed | translate-nl |
| `<li>` | /li>\n \n \n Bekijk record \n \n \n \n \n \n \n … | english | flowing | translate-nl |
| `<li>` | /li>\n \n \n Bekijk record \n \n \n \n \n \n \n … | english | flowing | translate-nl |
| `<li>` | /li>\n \n \n Bekijk record \n \n \n \n \n \n \n … | english | flowing | translate-nl |
| `<li>` | /li>\n \n \n Bekijk record \n \n \n \n \n \n \n … | english | flowing | translate-nl |
| `<li>` | /li>\n \n \n Bekijk record \n \n \n \n \n \n \n … | english | flowing | translate-nl |

### /contact  (contact.tsx)

| tag | section / first ~12 words | state | length | action |
|---|---|---|---|---|
| `<p>` | Join us for an exhilarating live auction experience where art meets\n excitement. | commerce-remnant | flowing | rewrite-neutral |
| `<p>` | An Art Action Company typically operates in the space of live art, … | english | flowing | translate-nl |
| `<span>` | Monday to Friday | english | fixed | translate-nl |
| `<li>` | at - 9:30 am - 6:30 pm | english | flowing | translate-nl |
| `<li>` | from - Monday to Friday | english | flowing | translate-nl |

### /faq  (faq.tsx)

| tag | section / first ~12 words | state | length | action |
|---|---|---|---|---|
| `<p>` | An Art Action Company typically operates in the space of live art, … | english | flowing | translate-nl |
| `<h2>` | \n \n What is an art auction?\n \n | commerce-remnant | fixed | rewrite-neutral |
| `<h2>` | \n \n How do I participate in an art auction?\n \n | commerce-remnant | fixed | rewrite-neutral |
| `<h2>` | \n \n What is a reserve price?\n \n | commerce-remnant | fixed | rewrite-neutral |
| `<h2>` | \n \n What is a buyer’s premium?\n \n | commerce-remnant | fixed | rewrite-neutral |
| `<h2>` | \n \n How do I know if the artwork is authentic?\n \n | english | fixed | translate-nl |
| `<h2>` | \n \n What happens if I win a bid at an art … | commerce-remnant | fixed | rewrite-neutral |
| `<h2>` | \n \n Can I return or exchange an artwork after purchasing it … | commerce-remnant | fixed | rewrite-neutral |
| `<h2>` | \n \n What types of payment methods are accepted at art auctions?\n … | commerce-remnant | fixed | rewrite-neutral |
| `<h2>` | \n \n Can I inspect the artwork before the auction?\n \n | commerce-remnant | fixed | rewrite-neutral |
| `<h2>` | \n \n How is artwork shipped after an online auction?\n \n | commerce-remnant | fixed | rewrite-neutral |
| `<h2>` | Have Any Question? Ask us | english | fixed | translate-nl |
| `<li>` | \n Bidding \n | commerce-remnant | flowing | rewrite-neutral |
| `<button>` | Bidding | commerce-remnant | fixed | rewrite-neutral |
| `<button>` | \n What is an art auction?\n | commerce-remnant | fixed | rewrite-neutral |
| `<button>` | \n How do I participate in an art auction?\n | commerce-remnant | fixed | rewrite-neutral |
| `<button>` | \n What is a reserve price?\n | commerce-remnant | fixed | rewrite-neutral |
| `<button>` | \n What is a buyer’s premium?\n | commerce-remnant | fixed | rewrite-neutral |
| `<button>` | \n How do I know if the artwork is authentic?\n | english | fixed | translate-nl |
| `<button>` | \n What happens if I win a bid at an art auction?\n | commerce-remnant | fixed | rewrite-neutral |
| `<button>` | \n Can I return or exchange an artwork after purchasing it at … | commerce-remnant | fixed | rewrite-neutral |
| `<button>` | \n What types of payment methods are accepted at art auctions?\n | commerce-remnant | fixed | rewrite-neutral |
| `<button>` | \n Can I inspect the artwork before the auction?\n | commerce-remnant | fixed | rewrite-neutral |
| `<button>` | \n How is artwork shipped after an online auction?\n | commerce-remnant | fixed | rewrite-neutral |

### /search  (search.tsx)

| tag | section / first ~12 words | state | length | action |
|---|---|---|---|---|
| `<p>` | An art catalog is a curated assembly of artworks gathered by an … | english | flowing | translate-nl |
| `<p>` | An Art Action Company typically operates in the space of live art, … | english | flowing | translate-nl |
| `<h5>` | Shop Catalog | commerce-remnant | fixed | rewrite-neutral |
| `<h5>` | Artist Name | english | fixed | translate-nl |
| `<h5>` | Price Filter | commerce-remnant | fixed | rewrite-neutral |
| `<h6>` | Showing 09 of 12 results | english | fixed | translate-nl |
| `<h6>` | Bright Colors on the Summer Wind | english | fixed | translate-nl |
| `<h6>` | Sighs of Isolation from a Lost City \n | english | fixed | translate-nl |
| `<h6>` | The Final Rays of Light from My\n Childhood \n | english | fixed | translate-nl |
| `<h6>` | Dancing Colors on a Summer Breeze \n | english | fixed | translate-nl |
| `<h6>` | The Last Light Echoes of My Youth \n | english | fixed | translate-nl |
| `<h6>` | Whispers of Solitude of a Forgotten City \n | english | fixed | translate-nl |
| `<h6>` | The Shining Day Remnants of My Early Years | english | fixed | translate-nl |
| `<a>` | See More | english | fixed | translate-nl |
| `<a>` | Sighs of Isolation from a Lost City | english | fixed | translate-nl |
| `<a>` | The Final Rays of Light from My\n Childhood | english | fixed | translate-nl |
| `<a>` | Dancing Colors on a Summer Breeze | english | fixed | translate-nl |
| `<a>` | The Last Light Echoes of My Youth | english | fixed | translate-nl |
| `<a>` | Whispers of Solitude of a Forgotten City | english | fixed | translate-nl |
| `<li>` | /li>\n \n \n Bekijk record \n \n \n \n \n \n \n … | english | flowing | translate-nl |
| `<li>` | /li>\n \n \n Bekijk record \n \n \n \n \n \n \n … | english | flowing | translate-nl |
| `<li>` | /li>\n \n \n Bekijk record \n \n \n \n \n \n \n … | english | flowing | translate-nl |
| `<li>` | /li>\n \n \n Bekijk record \n \n \n \n \n \n \n … | english | flowing | translate-nl |
| `<li>` | /li>\n \n \n Bekijk record \n \n \n \n \n \n \n … | english | flowing | translate-nl |

### /accessibility  (accessibility.tsx)

| tag | section / first ~12 words | state | length | action |
|---|---|---|---|---|
| `<p>` | An Art Action Company typically operates in the space of live art, … | english | flowing | translate-nl |
| `<h2>` | Welcome to Artmart Privacy Policy | commerce-remnant | fixed | rewrite-neutral |
| `<h2>` | How we collect personal information | english | fixed | translate-nl |
| `<li>` | 1) Fees and Payment: Clearly state your pricing structure,\n payment terms, and … | commerce-remnant | flowing | rewrite-neutral |
| `<li>` | 2) Termination and Cancellation: Outline the process for\n terminating the consulting agreement … | english | flowing | translate-nl |
| `<li>` | 3) Liability and Indemnification: Describe your liability\n limits and the circumstances under … | english | flowing | translate-nl |
| `<li>` | 4) Governing Law and Jurisdiction: Define the governing law\n that will apply … | english | flowing | translate-nl |

### /privacy  (privacy.tsx)

| tag | section / first ~12 words | state | length | action |
|---|---|---|---|---|
| `<p>` | An Art Action Company typically operates in the space of live art, … | english | flowing | translate-nl |
| `<h2>` | Welcome to Artmart Privacy Policy | commerce-remnant | fixed | rewrite-neutral |
| `<h2>` | How we collect personal information | english | fixed | translate-nl |
| `<li>` | 1) Fees and Payment: Clearly state your pricing structure,\n payment terms, and … | commerce-remnant | flowing | rewrite-neutral |
| `<li>` | 2) Termination and Cancellation: Outline the process for\n terminating the consulting agreement … | english | flowing | translate-nl |
| `<li>` | 3) Liability and Indemnification: Describe your liability\n limits and the circumstances under … | english | flowing | translate-nl |
| `<li>` | 4) Governing Law and Jurisdiction: Define the governing law\n that will apply … | english | flowing | translate-nl |

### /terms  (terms.tsx)

| tag | section / first ~12 words | state | length | action |
|---|---|---|---|---|
| `<p>` | Urna Aenean onewaryzo eleifend vitae tellus a facilisis. Nunc posuere at augue … | english | flowing | translate-nl |
| `<p>` | It's important to have your terms and conditions reviewed by legal counsel … | commerce-remnant | flowing | rewrite-neutral |
| `<p>` | It's important to have your terms and conditions reviewed by legal counsel … | english | flowing | translate-nl |
| `<p>` | While a career comes with many benefits, it also involves\n challenges, such … | english | flowing | translate-nl |
| `<p>` | An Art Action Company typically operates in the space of live art, … | english | flowing | translate-nl |
| `<h3>` | Bidding Terms & Condition of Artmart | commerce-remnant | fixed | rewrite-neutral |
| `<h3>` | Buying Auction Terms & Condition of Artmart | commerce-remnant | fixed | rewrite-neutral |
| `<li>` | 1) Fees and Payment: Clearly state your pricing structure,\n payment terms, and … | commerce-remnant | flowing | rewrite-neutral |
| `<li>` | 2) Termination and Cancellation: Outline the process for\n terminating the consulting agreement … | english | flowing | translate-nl |
| `<li>` | 3) Liability and Indemnification: Describe your liability\n limits and the circumstances under … | english | flowing | translate-nl |
| `<li>` | 4) Governing Law and Jurisdiction: Define the governing law\n that will apply … | english | flowing | translate-nl |

### /$ (404)  ($.tsx)

| tag | section / first ~12 words | state | length | action |
|---|---|---|---|---|
| `<p>` | Explore mediums, practice, and learn | english | flowing | translate-nl |
| `<p>` | An Art Action Company typically operates in the space of live art, … | english | flowing | translate-nl |
| `<h2>` | Welcome to Artmart Privacy Policy | commerce-remnant | fixed | rewrite-neutral |
| `<h2>` | How we collect personal information | english | fixed | translate-nl |
| `<h6>` | Shop catalog | commerce-remnant | fixed | rewrite-neutral |
| `<h6>` | Artist Name | english | fixed | translate-nl |
| `<span>` | See All | english | fixed | translate-nl |
| `<a>` | Print and Multiples | english | fixed | translate-nl |
| `<a>` | \n \n \n \n \n \n \n \n \n Veelgestelde vragen \n … | english | fixed | translate-nl |
| `<a>` | About us | english | fixed | translate-nl |
| `<li>` | \n Kunst \n \n \n \n \n \n Shop catalog \n \n … | commerce-remnant | flowing | rewrite-neutral |
| `<li>` | \n \n Artist Name \n \n \n Frida Kahlo | english | flowing | translate-nl |
| `<li>` | \n \n \n \n \n \n \n \n \n \n Veelgestelde vragen … | english | flowing | translate-nl |
| `<li>` | 1) Fees and Payment: Clearly state your pricing structure,\n payment terms, and … | commerce-remnant | flowing | rewrite-neutral |
| `<li>` | 2) Termination and Cancellation: Outline the process for\n terminating the consulting agreement … | english | flowing | translate-nl |
| `<li>` | 3) Liability and Indemnification: Describe your liability\n limits and the circumstances under … | english | flowing | translate-nl |
| `<li>` | 4) Governing Law and Jurisdiction: Define the governing law\n that will apply … | english | flowing | translate-nl |

## Deep-dive · /about — commerce & English remnants

Explicit list requested by the round brief. Locate by searching the strings in `src/routes/about.tsx`.

| # | tag | text (first ~16 words) | state | length | action |
|---:|---|---|---|---|---|
| 1 | `<p>` | At Artmart, we are passionate art enthusiasts dedicated to connecting artists and collectors\n through dynamic and | commerce-remnant | flowing | rewrite-neutral |
| 2 | `<p>` | At Artmart, our mission is to revolutionize the art experience We are committed to: | commerce-remnant | flowing | rewrite-neutral |
| 3 | `<p>` | We believe that art has the power to inspire, transform, and connect people. Our goal is | english | flowing | translate-nl |
| 4 | `<p>` | A group of passionate art collectors and tech innovators, the company set out to make art\n | english | flowing | translate-nl |
| 5 | `<p>` | The first online auction was launched in early 2011, featuring a curated collection of\n contemporary artworks. | commerce-remnant | flowing | rewrite-neutral |
| 6 | `<p>` | By 2013, had expanded its offerings to include a diverse range of art genres, including\n modern, | english | flowing | translate-nl |
| 7 | `<p>` | In 2021, the platform launched an initiative to support emerging artists, offering them a\n dedicated space | english | flowing | translate-nl |
| 8 | `<p>` | By 2017, the platform had established itself as a leader in the online art auction industry,\n | commerce-remnant | flowing | rewrite-neutral |
| 9 | `<p>` | As of 2023, remains committed to its founding vision while continuing to innovate and adapt\n to | english | flowing | translate-nl |
| 10 | `<p>` | An unparalleled art auction experience where quality, integrity, and passion for art come\n together. | commerce-remnant | flowing | rewrite-neutral |
| 11 | `<p>` | supporting their creative endeavors them continue to produce extraordinary works.\n | english | flowing | translate-nl |
| 12 | `<p>` | We connect artists and collectors from around the world | english | flowing | translate-nl |
| 13 | `<p>` | Our website is designed for ease of use | english | flowing | translate-nl |
| 14 | `<p>` | Join us for an exhilarating live auction experience where art meets\n excitement. | commerce-remnant | flowing | rewrite-neutral |
| 15 | `<p>` | An Art Action Company typically operates in the space of live art, performance, and\n social practice, | english | flowing | translate-nl |
| 16 | `<h3>` | Our Artistic Endeavor | english | fixed | translate-nl |
| 17 | `<h3>` | The Story Behind Us | english | fixed | translate-nl |
| 18 | `<h3>` | What Makes Us Special | english | fixed | translate-nl |
| 19 | `<h5>` | The Vision Takes Shape | english | fixed | translate-nl |
| 20 | `<h5>` | Expanding the Horizon | english | fixed | translate-nl |
| 21 | `<h5>` | Supporting Emerging Artists | english | fixed | translate-nl |
| 22 | `<h5>` | Continuing the Legacy | english | fixed | translate-nl |
| 23 | `<h5>` | Support Artists | english | fixed | translate-nl |
| 24 | `<li>` | \n \n \n \n Empowering Artists\n | english | flowing | translate-nl |
| 25 | `<li>` | \n \n \n \n \n \n \n \n \n \n \n Support Artists \n supporting their | english | flowing | translate-nl |
| 26 | `<li>` | \n \n \n \n \n \n \n \n \n \n Secure Transactions \n We connect artists | english | flowing | translate-nl |
| 27 | `<li>` | \n \n \n \n \n \n \n User-Friendly Platform \n Our website is designed for ease | english | flowing | translate-nl |
| 28 | `<li>` | \n \n \n \n \n \n \n Seamless Experience \n We connect artists and collectors from | english | flowing | translate-nl |

## Deep-dive · /faq, /privacy, /terms

These pages contain long-form flowing text. Length is permissive — Dutch may run longer. See per-route tables above for the row-by-row list. The dominant issue on `/faq` is **commerce wording** (auction/bid/buy), not raw English; recommended action is `rewrite-neutral` mapping each Q&A to heritage/records/contribution language.

## Priority queue for the copy round

1. **/about** — commerce-remnants and English hero/feature/CTA text (blocking; visible on landing chrome).
2. **/faq** — 20 commerce-flavoured Q&A entries need neutral rewrite.
3. **/privacy**, **/terms** — small English residue in long NL bodies.
4. **/heritage**, **/heritage/details**, **/heritage/upcoming** — English section intros + commerce fragments in cards.
5. **/artists/portfolio**, **/organizations/details**, **/stories/details**, **/events/details** — English record-level placeholder blocks; may stay `keep-placeholder` if we prefer generic filler until real data arrives.
6. **/collections/$slug**, **/media**, **/search**, **/$ (404)** — remaining English intros and empty-state copy.
7. **/**, **/stories**, **/events**, **/artists**, **/organizations**, **/accessibility**, **/contact** — small English residue in section intros / helper text.

## Notes on classification

- Auto-classifier is heuristic (NL/EN stopword ratio + commerce regex). Short neutral strings (dates, names, numeric badges) are counted as `already-dutch`. Some short EN utility strings (e.g. "Read More", "View All") may still slip through as `english`; treat those as label work already covered in Round F and skip in copy round.
- `fixed` rows require character-budget checking against the source string before translating (see Round F length-discipline rules).
- Detail pages (`*.details`) mostly hold record-shaped placeholder prose. Recommendation: keep-placeholder for record body, translate-nl only for section intros/labels around them.
