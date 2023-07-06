export const View = () => [
  article([
    header([
      h1({ class: 'page-title' }, ['Blender 3D Workshop 2022', span({ class: 'icon' }, '🧠')]),
    ]),

    div({ class: 'page-body' }, [
      ul(li([span('little motivational video by Hendy August:')])),
      VideoEmbed('xBr7uW7uC1Y'),

      p(
        'I learned blender since Oct 2020 and I have the feeling after getting the basics it is so much fun creating: ',
      ),
      p(
        'This Workshop is specifically created to use blender as a tool to generate content for 3D experiences in the web, which means that many key features of blender are not covered in this series. The aim is to give you a broad understanding of how to generate 3D artworks for augmented reality and games that can be used on the Artificial Museum and any other webpage. ',
      ),
      p('Platform:'),
      p('artificialmuseum.com'),
      ul([
        li([
          Link({ to: 'https://discord.com/invite/kP7qZrr3' }, 'Artificial Museum Discord Server'),
        ]),
        li([
          Link({ to: 'https://github.com/artificialmuseum/sandbox/' }, 'Artificial Museum Sandbox'),
        ]),
        li([
          'Test your gltf files in three.js:',
          Link({ to: 'https://gltf-viewer.donmccurdy.com/' }, 'gltf-viewer'),
        ]),
      ]),

      h2('01. How to use Blender '),

      ul([
        li(span('Interface, Set up blender')),
        li(span('Onboarding')),
        li(span('Edit Mode - model 3D object')),
        li(span('Explain Outliner ')),
        li(span('Object Mode - add lights to the scene')),
        li(span('Materials - how to give your object textures ')),
      ]),

      p('In this lesson we will learn how to use blender 2.8/2.92 for the first time. '),
      p([
        'We will also create our first 3D Object and add some texture and light into the scene.',
        ' After we are happy with the result, we will export it as GLTF file and test it using the ',
        Link({ to: 'https://gltf-viewer.donmccurdy.com/' }, 'gltf-viewer'),
        '.',
      ]),

      p('Main focus is to get you started with understanding the program and it’s structure.'),
      p('For that I prepared some very helpful youtube tutorials:'),

      h3('Interface: How to move in Blender?'),
      div({ class: 'source' }, VideoEmbed('K6Sm7DAPTGE')),
      p(
        {
          class: 'block-color-gray_background',
        },
        'yt: TutsByKai',
      ),

      h3('Edit Mode: First steps (learning the shortcodes helps a lot)'),

      p('Modeling and how to transform meshes to lower poly count'),
      VideoEmbed('_HLMmaQM8Pg'),

      h3('Blender low poly modelling'),
      p([
        'In this tutorial you will learn essential basics about how blender works,',
        ' it also focuses on low poly modelling,',
        ' which is the perfect approach for web - based content and / or games. ;) ',
      ]),

      VideoEmbed('1jHUY3qoBu8'),
      p({ class: 'block-color-gray_background' }, 'yt: Imphenzia'),

      p('Shortcuts for movement/scale/rotate:'),
      h4('object mode:'),

      p('S, Scale (X – Y – Z)'),
      p('R, Rotate (X – Y – Z)'),
      p('G, Move/Verschieben (X – Y – Z)'),
      p('W - selection tool'),

      h4('edit mode:'),
      p('E extrude faces'),
      p('I intersect faces'),
      p('Ctrl B - Bevel'),
      p('Ctrl R - Loop Cut'),
      p('A select all'),
      p('L select faces/edges/vertices around your selection'),
      p('ctrl click - snake select'),
      p('shift select - select loops'),

      h4('Addons:'),

      p('image to plane'),
      p('UV Mapping'),
      p('UV Projection mapping'),

      h4('Shader Materials, Textures and the fun stuff'),

      p('Normal Map, Metal Map, Roughness Texture, transparent textures etc.'),

      h4('Modifiers and more modeling'),

      p('Sculpt mode short intro —> more in lesson “Sculpting Characters” lesson'),
      p(
        'In this lesson you are asked to bring in your photography, paintings, images you want to transform into a 3D object. There are many simple techniques and helpful tools to get started pretty quickly.',
      ),

      h3('Materials for web (Principal Shader)'),
      figure(
        Link(
          {
            to: 'https://docs.blender.org/manual/en/dev/addons/import_export/scene_gltf2.html?highlight=gltf',
            class: 'bookmark source',
          },
          [
            div({ class: 'bookmark-info' }, [
              div({ class: 'bookmark-text' }, [
                div({ class: 'bookmark-title' }, 'glTF 2.0 - Blender Manual'),
                div(
                  { class: 'bookmark-description' },
                  'Reference Category Import-Export Menu glTF™ (GL Transmission Format) is used for transmission and loading of 3D models in web and native applications. glTF reduces the size of 3D models and the runtime processing needed to unpack and render those models.',
                ),
              ]),
              div({ class: 'bookmark-href' }, [
                Img({
                  src: 'https://docs.blender.org/manual/en/latest/_static/favicon.ico',
                  class: 'icon bookmark-icon',
                }),
                'https://docs.blender.org/manual/en/dev/addons/import_export/scene_gltf2.html?highlight=gltf',
              ]),
            ]),
            Img({
              src: 'https://docs.blender.org/manual/en/latest/_images/addons_import-export_scene-gltf2_material-channels.jpg',
              class: 'bookmark-image',
            }),
          ],
        ),
      ),
      p('Detailed information about each texture and how to build it in the blender shader graph'),
      figure(
        Link(
          {
            to: 'https://www.cgbookcase.com/learn/how-to-use-pbr-textures-in-blender/',
            class: 'bookmark source',
          },
          [
            div({ class: 'bookmark-info' }, [
              div({ class: 'bookmark-text' }, [
                div({ class: 'bookmark-title' }, 'How to use PBR Textures in Blender'),
                div(
                  { class: 'bookmark-description' },
                  'Usage of most materials using the Principled Shader. Apart from the Displacement section, this setup works for both Cycles and Eevee. The Base Color map defines the color of a surface. It should be plugged into the Base Color input of the Principled BSDF. Make sure the image file&#x27;s color space is set to Color.',
                ),
              ]),
              div({ class: 'bookmark-href' }, [
                Img({
                  src: 'https://www.cgbookcase.com/favicon.png',
                  class: 'icon bookmark-icon',
                }),
                'https://www.cgbookcase.com/learn/how-to-use-pbr-textures-in-blender/',
              ]),
            ]),
            Img({
              src: 'https://cdn2.cgbookcase.cloud/textures/guides/blender/default/03_height-bump_c.jpg',
              class: 'bookmark-image',
            }),
          ],
        ),
      ),
      p(b('Generate your own materials/textures ')),
      div({ class: 'indented' }, [
        p(
          mark(
            { class: 'highlight-teal_background' },
            'with Materialize (better for this task than Photoshop!!) - very helpful!',
          ),
        ),
        figure(
          Link(
            {
              to: 'https://boundingboxsoftware.com/materialize/tutorials.php',
              class: 'bookmark source',
            },
            [
              div({ class: 'bookmark-info' }, [
                div({ class: 'bookmark-text' }, [
                  div({ class: 'bookmark-title' }, 'Bounding Box Software - Materialize'),
                  div(
                    { class: 'bookmark-description' },
                    'About | Get Materialize | Downloads | FAQ | Tutorials',
                  ),
                ]),
                div({ class: 'bookmark-href' }, [
                  Img({
                    src: 'http://boundingboxsoftware.com/images/page_icon_32.ico',
                    class: 'icon bookmark-icon',
                  }),
                  'https://boundingboxsoftware.com/materialize/tutorials.php',
                ]),
              ]),
              Img({
                src: 'http://boundingboxsoftware.com/materialize/images/materialize_header_full.png',
                class: 'bookmark-image',
              }),
            ],
          ),
        ),
        p('another tool to help you make seamless textures'),
        div(
          { class: 'indented' },
          figure(
            div(
              { class: 'source' },
              Link(
                {
                  to: 'https://www.imgonline.com.ua/eng/make-seamless-texture.php',
                },
                'https://www.imgonline.com.ua/eng/make-seamless-texture.php',
              ),
            ),
          ),
        ),
        p(),
        p(
          'another tool to generate textures but this time mainly normal maps! - has a cool preview',
        ),
        figure(
          Link(
            {
              to: 'https://cpetry.github.io/NormalMap-Online/',
              class: 'bookmark source',
            },
            [
              div({ class: 'bookmark-info' }, [
                div({ class: 'bookmark-text' }, [
                  div({ class: 'bookmark-title' }, 'NormalMap-Online'),
                  div(
                    { class: 'bookmark-description' },
                    'Online NormalMap Generator FREE! Create a Normalmap directly inside your browser! No Uploads required, completely client-based',
                  ),
                ]),
                div({ class: 'bookmark-href' }, [
                  Img({
                    src: 'https://cpetry.github.io/NormalMap-Online/images/favicon.png',
                    class: 'icon bookmark-icon',
                  }),
                  'https://cpetry.github.io/NormalMap-Online/',
                ]),
              ]),
              Img({
                src: 'https://cpetry.github.io/NormalMap-Online/images/nmap_logo_trans_small.png',
                class: 'bookmark-image',
              }),
            ],
          ),
        ),
        p('ready to use materials/textures'),
        figure(
          Link(
            {
              to: 'https://www.cgbookcase.com/textures/',
              class: 'bookmark source',
            },
            div({ class: 'bookmark-info' }, [
              div({ class: 'bookmark-text' }, [
                div({ class: 'bookmark-title' }, 'Textures | cgbookcase.com'),
                div(
                  { class: 'bookmark-description' },
                  'Minimum Resolution The textures are published under the CC0 1.0 license, which means means you can use them for free without giving credit. Read more > Creating and publishing textures for free is made possible by amazing individuals and companies supporting this project on Patreon. You can also support this project by donating on Ko-Fi.',
                ),
              ]),
              div({ class: 'bookmark-href' }, [
                Img({
                  src: 'https://www.cgbookcase.com/favicon.png',
                  class: 'icon bookmark-icon',
                }),
                'https://www.cgbookcase.com/textures',
              ]),
            ]),
          ),
        ),
        p('create textures in Photoshop & Illustrator (for those of you who have Adobe CC)'),
        figure(
          Link(
            { to: 'https://www.poliigon.com/', class: 'bookmark source' },
            div({ class: 'bookmark-info' }, [
              div({ class: 'bookmark-text' }, div({ class: 'bookmark-title' })),
              div({ class: 'bookmark-href' }, 'https://www.poliigon.com/'),
            ]),
          ),
        ),

        h4('How To Create Your Own Texture Resources in Photoshop & Illustrator'),
        p([
          "In today's tutorial",
          ' i have some tips and techniques to share for creating texture resources in Photoshop and Illustrator.',
          ' Rather than being a guide with a pa...',
        ]),
        VideoEmbed('VfogUHUWDtU'),
      ]),

      h3('Online resources for 3d models'),
      p('get 3D models online (mostly for free) 🙂'),

      h3('Sketchfab'),
      p('(you have to register but it is worth it, big community and a lot of free stuff there)'),
      p([
        'Use Sketchfab to publish, share and embed interactive 3D files.',
        ' Discover and download thousands of 3D models from games,',
        ' cultural heritage, architecture, design and more.',
      ]),

      Link({ to: 'https://sketchfab.com/' }, 'sketchfab'),

      h3('Turbosquid'),
      p('another source to get 3D models'),
      Link({ to: 'https://www.turbosquid.com/' }, 'Turbosquid'),
      p(
        '3D textures. models for download, files in 3ds, max, c4d, maya, blend, obj, fbx with low poly, animated, rigged, game, and VR options.',
      ),

      h3('Thingiverse'),
      p('yet another source of models (very low poly, because they are ready for 3d printing)'),

      Link({ to: 'https://www.thingiverse.com/', text: 'Thingiverse' }),

      h3('Modifiers'),
      p('All 50+ Modifiers in Blender Explained in 30 Minutes or Less'),
      p(Link({ to: 'https://danielkkrafft.gumroad.com/l/modifierspdf', text: 'PDF version' })),

      VideoEmbed('8BQYAwDW6IE'),

      p('yt: Daniel Krafft'),
      h3('Projection Painting'),
      p(
        'Learn projection painting in Blender 2.90. This is just a basic overview to get you started. Pixabay image:https://pixabay.com/photos/monkey-baby-barbary-mac...',
      ),

      VideoEmbed('Gh_LzoliD6A'),

      h3('2D Drawings to 3D Meshes (a nice hack)'),
      p('Monster Mash(drawing to mesh) + Blender 2.9 (eevee) / easy cg illustrations'),
      p(
        '0:00 introduction / playing around 3:40 Timelapse - Simple/Clay like Unterwater Scene 7:40 Conclusion Hey i tried this awesome tool called "Monster Mash".',
      ),
      VideoEmbed('kUe_PXfoFTk'),

      p(
        {
          class: 'block-color-gray_background',
        },
        'yt: Alex Mehler',
      ),
      figure(
        Link({ to: 'https://monstermash.zone/', class: 'bookmark source' }, [
          div({ class: 'bookmark-info' }, [
            div({ class: 'bookmark-text' }, [
              div(
                { class: 'bookmark-title' },
                'Monster Mash: New Sketch-Based Modeling and Animation Tool',
              ),
              div(
                { class: 'bookmark-description' },
                'Monster Mash is a new sketch-based modeling and animation tool that allows you to quickly sketch a character, inflate it into 3D, and promptly animate it. You can perform all interactions in the sketching plane. No 3D manipulation is required.',
              ),
            ]),
            div({ class: 'bookmark-href' }, [
              Img({
                src: 'https://monstermash.zone/favicon.ico',
                class: 'icon bookmark-icon',
              }),
            ]),
          ]),
          Link(
            { to: 'https://monstermash.zone/' },
            Img({
              src: 'https://monstermash.zone/imgs/thumbnail_wide.png',
              class: 'bookmark-image',
            }),
          ),
        ]),
      ),
      p('Fix mistakes in Monster Mesh - projection mapping, texture painting'),
      figure(
        Link(
          {
            to: 'https://www.youtube.com/watch?v=r9LC2p1Cqiw&t=168s',
            class: 'bookmark source',
          },
          [
            div({ class: 'bookmark-info' }, [
              div({ class: 'bookmark-text' }, [
                div(
                  { class: 'bookmark-title' },
                  'Blender 2.8 - Texture Projection Painting (Beginners Crash Course)',
                ),
                div(
                  { class: 'bookmark-description' },
                  'Blender 2.8 - Texture Projection Painting (Beginners Crash Course)Extract object Texture from images using a technique called Projection Painting in Blender ...',
                ),
              ]),
              div({ class: 'bookmark-href' }, [
                Img({
                  src: 'https://www.youtube.com/s/desktop/21ad9f7d/img/favicon.ico',
                  class: 'icon bookmark-icon',
                }),
                VideoEmbed('r9LC2p1Cqiw&t=168s'),
              ]),
            ]),
          ],
        ),
      ),
      h2(
        {
          class: 'block-color-teal_background',
        },
        mark(
          { class: 'highlight-teal_background' },
          '2.2 Texture Painting because it is so much fun',
        ),
      ),
      ul(li([span('Painting on 3D surface')])),
      ul(li([span('Texture Painting in Blender <3')])),
      p('Awesome tutorial for texture painting <3'),
      figure(
        Link(
          {
            to: 'https://www.youtube.com/watch?v=RBEA0EmkXs4&t=91s',
            class: 'bookmark source',
          },
          [
            div({ class: 'bookmark-info' }, [
              div(
                { class: 'bookmark-text' },
                div({ class: 'bookmark-title' }, 'Putting Graffiti on Stuff'),
              ),
              div({ class: 'bookmark-href' }, [
                Img({
                  src: 'https://www.youtube.com/s/desktop/2baf9075/img/favicon.ico',
                  class: 'icon bookmark-icon',
                }),
                VideoEmbed('RBEA0EmkXs4&t=91s'),
              ]),
            ]),
            Img({
              src: 'https://i.ytimg.com/vi/RBEA0EmkXs4/hqdefault.jpg',
              class: 'bookmark-image',
            }),
          ],
        ),
      ),
      p(
        {
          class: 'block-color-gray_background',
        },
        ['yt ', b('IanHubert')],
      ),
      p('Easy Hack: Online tool to generate drawing on surfaces :D '),
      figure(
        Link({ to: 'https://www.penzil.app/', class: 'bookmark source' }, [
          div({ class: 'bookmark-info' }, [
            div(
              { class: 'bookmark-text' },
              div({ class: 'bookmark-title' }, 'Penzil - 3d sketching for the web'),
            ),
            div({ class: 'bookmark-href' }, [
              Img({
                src: 'https://www.penzil.app/favicon.ico',
                class: 'icon bookmark-icon',
              }),
              'https://www.penzil.app/',
            ]),
          ]),
          Img({
            src: 'https://www.penzil.app/penzil_preview.png',
            class: 'bookmark-image',
          }),
        ]),
      ),
      p('Texturing, retexturing, '),
      figure(
        Link(
          {
            to: 'https://www.youtube.com/watch?v=Y0xBv_taJPQ&list=RDCMUCsm54Ydrdc24yzAqxEa3NLw&start_radio=1&t=232',
            class: 'bookmark source',
          },
          [
            div({ class: 'bookmark-info' }, [
              div({ class: 'bookmark-text' }, [
                div(
                  { class: 'bookmark-title' },
                  'Blender Skin Texturing And Hair Grooming - Color Map Texturing [Part 01]',
                ),
                div(
                  { class: 'bookmark-description' },
                  'Blender Tutorial - Skin Texturing And Hair Grooming Color Map Texturing [Part 01]Softwares Used:Blender, Substance painter, PhotoshopHey There!!I am here wit...',
                ),
              ]),
              div({ class: 'bookmark-href' }, [
                Img({
                  src: 'https://www.youtube.com/s/desktop/3cbce0d4/img/favicon.ico',
                  class: 'icon bookmark-icon',
                }),
                VideoEmbed('Y0xBv_taJPQ&list=RDCMUCsm54Ydrdc24yzAqxEa3NLw&start_radio=1&t=232'),
              ]),
            ]),
            Img({
              src: 'https://i.ytimg.com/vi/Y0xBv_taJPQ/hqdefault.jpg',
              class: 'bookmark-image',
            }),
          ],
        ),
      ),
      h2(
        {
          class: 'block-color-yellow_background',
        },
        '03. Photogrammetry & Blender ',
      ),
      ul(li([span('generate Models')])),
      ul(li([span('Clean Up Model')])),
      ul(li([span('Make it ready for animation')])),
      h3('1. Create 3D object with Photogrammetry '),
      p('The magic of photogrammetry: motivation Video  '),
      figure(
        Link(
          {
            to: 'https://www.youtube.com/watch?v=SuNNyjs9BO8',
            class: 'bookmark source',
          },
          [
            div({ class: 'bookmark-info' }, [
              div({ class: 'bookmark-text' }, [
                div({ class: 'bookmark-title' }, 'Modeling Is DEAD'),
                div(
                  { class: 'bookmark-description' },
                  'Get 30% off PPI 2000 credits using code: CGMATTER-30OFF-RKNEFX (apply at FastSpring)patreon and stuff https://www.patreon.com/cg_matterwebsite https://www.cg...',
                ),
              ]),
              div({ class: 'bookmark-href' }, [
                Img({
                  src: 'https://www.youtube.com/s/desktop/3cbce0d4/img/favicon.ico',
                  class: 'icon bookmark-icon',
                }),
                VideoEmbed('SuNNyjs9BO8'),
              ]),
            ]),
            Img({
              src: 'https://i.ytimg.com/vi/SuNNyjs9BO8/hqdefault.jpg',
              class: 'bookmark-image',
            }),
          ],
        ),
      ),
      p(b('with app on iOS')),
      ul(
        li([
          b('Scaniverse '),
          '(my favorite tool, good for room scans, sculptures and bigger objects)',
          p(['Download: ', Link({ to: 'https://scaniverse.com/' }, 'https://scaniverse.com/')]),
        ]),
      ),
      ul(
        li([
          b('Trnio '),
          '(good for smaller objects, like coffee cups, faces!!!)',
          p(['Download: ', Link({ to: 'https://www.trnio.com/' }, 'https://www.trnio.com/')]),
        ]),
      ),
      ul(
        li([
          b('Canvas'),
          ' (just found that one, specifically for room scans)',
          p(['Download: ', Link({ to: 'https://canvas.io/' }, 'https://canvas.io/')]),
        ]),
      ),
      p(b('on PC with video input or image input')),
      ul(
        li([
          b('Meshroom '),
          '(open source, tried and failed, but maybe you find out :))',
          p([
            'Donwload: ',
            Link(
              { to: 'https://meshroom.de.uptodown.com/windows' },
              'https://meshroom.de.uptodown.com/windows',
            ),
          ]),
          p('How to use Meshroom'),
          figure(
            Link(
              {
                to: 'https://alicevision.org/#meshroom',
                class: 'bookmark source',
              },
              div({ class: 'bookmark-info' }, [
                div({ class: 'bookmark-text' }, [
                  div(
                    { class: 'bookmark-title' },
                    'AliceVision | Photogrammetric Computer Vision Framework',
                  ),
                  div(
                    { class: 'bookmark-description' },
                    'AliceVision is a Photogrammetric Computer Vision framework for 3D Reconstruction and Camera Tracking.',
                  ),
                ]),
                div({ class: 'bookmark-href' }, [
                  Img({
                    src: 'https://alicevision.org/img/icon.png',
                    class: 'icon bookmark-icon',
                  }),
                  'https://alicevision.org/#meshroom',
                ]),
              ]),
            ),
          ),
          figure(
            Link(
              {
                to: 'https://www.youtube.com/watch?v=RmMDFydHeso',
                class: 'bookmark source',
              },
              [
                div({ class: 'bookmark-info' }, [
                  div({ class: 'bookmark-text' }, [
                    div({ class: 'bookmark-title' }, 'Photogrammetry in Meshroom & Blender'),
                    div(
                      { class: 'bookmark-description' },
                      'Today we explore generating meshes inside of Meshroom and cleaning them up inside of Blender.Downloading Meshroom 0:00Alternatives to Meshroom 5:23Launching ...',
                    ),
                  ]),
                  div({ class: 'bookmark-href' }, [
                    Img({
                      src: 'https://www.youtube.com/s/desktop/3cbce0d4/img/favicon.ico',
                      class: 'icon bookmark-icon',
                    }),
                    VideoEmbed('RmMDFydHeso'),
                  ]),
                ]),
                Img({
                  src: 'https://i.ytimg.com/vi/RmMDFydHeso/hqdefault.jpg',
                  class: 'bookmark-image',
                }),
              ],
            ),
          ),
        ]),
      ),
      ul(
        li([
          b('Reality Capture'),
          ' (using program is for free, each download of the mesh costs around 20$)',
          p([
            'Download: ',
            Link({ to: 'https://www.capturingreality.com/' }, 'https://www.capturingreality.com/'),
          ]),
          p('How to:'),
          figure(
            Link(
              {
                to: 'https://www.youtube.com/watch?v=DTJq1Dz0nxY&t=6s',
                class: 'bookmark source',
              },
              [
                div({ class: 'bookmark-info' }, [
                  div({ class: 'bookmark-text' }, [
                    div(
                      { class: 'bookmark-title' },
                      'RealityCapture tutorial: How to create your first 3D model | Part 1 (legacy tutorial)',
                    ),
                    div(
                      { class: 'bookmark-description' },
                      'Learn how to create a detailed 3D model using RealityCapture software completely from the beginning.In Part 1 we will show you: 2:00 How to take the photos f...',
                    ),
                  ]),
                  div({ class: 'bookmark-href' }, [
                    Img({
                      src: 'https://www.youtube.com/s/desktop/21ad9f7d/img/favicon.ico',
                      class: 'icon bookmark-icon',
                    }),
                    VideoEmbed('DTJq1Dz0nxY&t=6s'),
                  ]),
                ]),
                Img({
                  src: 'https://i.ytimg.com/vi/DTJq1Dz0nxY/hqdefault.jpg',
                  class: 'bookmark-image',
                }),
              ],
            ),
          ),
        ]),
      ),
      ul(
        li([
          b('Zephyr Software'),
          ' (not for free,...just 50 images :( )',
          p([
            'Download: ',
            Link(
              { to: 'https://www.3dflow.net/3df-zephyr-feature-comparison/' },
              'https://www.3dflow.net/3df-zephyr-feature-comparison/',
            ),
          ]),
        ]),
      ),
      h3('2. Clean up mesh '),
      p('new tutorial for Blender 3.0'),
      figure(
        Link(
          {
            to: 'https://www.youtube.com/watch?v=I-lH2_Ca3Dw',
            class: 'bookmark source',
          },
          [
            div({ class: 'bookmark-info' }, [
              div({ class: 'bookmark-text' }, [
                div(
                  { class: 'bookmark-title' },
                  'How to Optimize Photogrammetry Scans with Blender 3.0 - Blender Tutorial',
                ),
                div(
                  { class: 'bookmark-description' },
                  'In this blender tutorial, I am going to show you my complete workflow for optimizing photogrammetry scans to improve rendering performance and for use as gam...',
                ),
              ]),
              div({ class: 'bookmark-href' }, [
                Img({
                  src: 'https://www.youtube.com/s/desktop/924317b2/img/favicon.ico',
                  class: 'icon bookmark-icon',
                }),
                VideoEmbed('I-lH2_Ca3Dw'),
              ]),
            ]),
            Img({
              src: 'https://i.ytimg.com/vi/I-lH2_Ca3Dw/hqdefault.jpg',
              class: 'bookmark-image',
            }),
          ],
        ),
      ),
      p([
        'I used',
        b(' Instant Meshes'),
        ' (open source program) but there are many other tools to cover ',
      ]),
      figure(
        Link(
          {
            to: 'https://github.com/wjakob/instant-meshes',
            class: 'bookmark source',
          },
          [
            div({ class: 'bookmark-info' }, [
              div({ class: 'bookmark-text' }, [
                div({ class: 'bookmark-title' }, 'wjakob/instant-meshes'),
                div(
                  { class: 'bookmark-description' },
                  'This repository contains the interactive meshing software developed as part of the publication Instant Field-Aligned Meshes Wenzel Jakob, Marco Tarini, Daniele Panozzo, Olga Sorkine-Hornung In ACM Transactions on Graphics (Proceedings of SIGGRAPH Asia 2015) PDF, Video, Project page In commercial software Since version 10.2, Modo uses the Instant Meshes algorithm to implement its automatic retopology feature.',
                ),
              ]),
              div({ class: 'bookmark-href' }, [
                Img({
                  src: 'https://github.com/favicon.ico',
                  class: 'icon bookmark-icon',
                }),
                'https://github.com/wjakob/instant-meshes',
              ]),
            ]),
            Img({
              src: 'https://opengraph.githubassets.com/6f19bcaf76bda770e68d01a503e1e9e19b8afc16f5e12f9a4b40099a8194fa65/wjakob/instant-meshes',
              class: 'bookmark-image',
            }),
          ],
        ),
      ),
      p('Easy Clean Up and BAKING of 3D Scan'),
      figure(
        Link(
          {
            to: 'https://www.youtube.com/watch?v=dKo0rWXVAlc',
            class: 'bookmark source',
          },
          [
            div({ class: 'bookmark-info' }, [
              div({ class: 'bookmark-text' }, [
                div({ class: 'bookmark-title' }, 'Easily Clean Your 3D Scans (blender)'),
                div(
                  { class: 'bookmark-description' },
                  'Your support is appreciated!https://www.patreon.com/peterfranceInstant Meshes:https://www.blendernation.com/2015/11/16/instant-meshes-a-free-qaud-based-autor...',
                ),
              ]),
              div({ class: 'bookmark-href' }, [
                Img({
                  src: 'https://www.youtube.com/s/desktop/3cbce0d4/img/favicon.ico',
                  class: 'icon bookmark-icon',
                }),
                VideoEmbed('dKo0rWXVAlc'),
              ]),
            ]),
            Img({
              src: 'https://i.ytimg.com/vi/dKo0rWXVAlc/hqdefault.jpg',
              class: 'bookmark-image',
            }),
          ],
        ),
      ),
      h2(
        {
          class: 'block-color-blue_background',
        },
        '04. Animation',
      ),
      ul(li([span('Timeline')])),
      ul(li([span('Shape Keys')])),
      ul(li([span('Bone Animation (simple approach)')])),
      ol(
        {
          type: '1',
          class: 'numbered-list',
          start: '1',
        },
        li(b('Fundamental Animation in Blender')),
      ),
      p('Timeline'),
      figure(
        Link(
          {
            to: 'https://www.youtube.com/watch?v=SZJswvw9wEs',
            class: 'bookmark source',
          },
          [
            div({ class: 'bookmark-info' }, [
              div({ class: 'bookmark-text' }, [
                div({ class: 'bookmark-title' }, 'Keyframes - Blender 2.80 Fundamentals'),
                div(
                  { class: 'bookmark-description' },
                  'Blender is Free and Open Source SoftwareDownload: https://blender.org/downloadSupport core Blender development - https://fund.blender.org--This tutorial is p...',
                ),
              ]),
              div({ class: 'bookmark-href' }, [
                Img({
                  src: 'https://www.youtube.com/s/desktop/21ad9f7d/img/favicon.ico',
                  class: 'icon bookmark-icon',
                }),
                VideoEmbed('SZJswvw9wEs'),
              ]),
            ]),
            Img({
              src: 'https://i.ytimg.com/vi/SZJswvw9wEs/hqdefault.jpg',
              class: 'bookmark-image',
            }),
          ],
        ),
      ),
      p('Dopesheed'),
      figure(
        Link(
          {
            to: 'https://www.youtube.com/watch?v=LHdh8p37yM8&t=18s',
            class: 'bookmark source',
          },
          [
            div({ class: 'bookmark-info' }, [
              div({ class: 'bookmark-text' }, [
                div({ class: 'bookmark-title' }, 'Dope Sheet - Blender 2.80 Fundamentals'),
                div(
                  { class: 'bookmark-description' },
                  'Blender is Free and Open Source SoftwareDownload: https://blender.org/downloadSupport core Blender development - https://fund.blender.org--This tutorial is p...',
                ),
              ]),
              div({ class: 'bookmark-href' }, [
                Img({
                  src: 'https://www.youtube.com/s/desktop/21ad9f7d/img/favicon.ico',
                  class: 'icon bookmark-icon',
                }),
                VideoEmbed('LHdh8p37yM8&t=18s'),
              ]),
            ]),
            Img({
              src: 'https://i.ytimg.com/vi/LHdh8p37yM8/hqdefault.jpg',
              class: 'bookmark-image',
            }),
          ],
        ),
      ),
      p('Graph Editor'),
      figure(
        Link(
          {
            to: 'https://www.youtube.com/watch?v=zHlln3AzeMs',
            class: 'bookmark source',
          },
          [
            div({ class: 'bookmark-info' }, [
              div({ class: 'bookmark-text' }, [
                div({ class: 'bookmark-title' }, 'Graph Editor - Blender 2.80 Fundamentals'),
                div(
                  { class: 'bookmark-description' },
                  'Support core Blender development - https://fund.blender.org',
                ),
              ]),
              div({ class: 'bookmark-href' }, [
                Img({
                  src: 'https://www.youtube.com/s/desktop/21ad9f7d/img/favicon.ico',
                  class: 'icon bookmark-icon',
                }),
                VideoEmbed('zHlln3AzeMs'),
              ]),
            ]),
            Img({
              src: 'https://i.ytimg.com/vi/zHlln3AzeMs/hqdefault.jpg',
              class: 'bookmark-image',
            }),
          ],
        ),
      ),
      p('non linear animation tool'),
      figure(
        Link(
          {
            to: 'https://www.youtube.com/watch?v=CdPyVu1auXk',
            class: 'bookmark source',
          },
          [
            div({ class: 'bookmark-info' }, [
              div({ class: 'bookmark-text' }, [
                div(
                  { class: 'bookmark-title' },
                  'How to use the Nonlinear Animation (NLA) Editor in Blender [2.83]',
                ),
                div(
                  { class: 'bookmark-description' },
                  'In this tutorial, we will be learning about nonlinear animation in Blender 2.83#b3d #animation #nonlinear --------------------I am a prop and environment art...',
                ),
              ]),
              div({ class: 'bookmark-href' }, [
                Img({
                  src: 'https://www.youtube.com/s/desktop/01530da7/img/favicon.ico',
                  class: 'icon bookmark-icon',
                }),
                VideoEmbed('CdPyVu1auXk'),
              ]),
            ]),
            Img({
              src: 'https://i.ytimg.com/vi/CdPyVu1auXk/hqdefault.jpg',
              class: 'bookmark-image',
            }),
          ],
        ),
      ),
      p('simple tutorial how to animate with shape keys'),
      figure(
        Link(
          {
            to: 'https://www.youtube.com/watch?v=B11XBZmIIZc',
            class: 'bookmark source',
          },
          [
            div({ class: 'bookmark-info' }, [
              div({ class: 'bookmark-text' }, [
                div({ class: 'bookmark-title' }, 'Learn Shape Keys In Under 5 Mins | Blender'),
                div(
                  { class: 'bookmark-description' },
                  'Understanding Shape Keys in Blender in under 5 minutes. This is for all you beginners out there. I don&#x27;t cover everything there is to know about shape keys, ...',
                ),
              ]),
              div({ class: 'bookmark-href' }, [
                Img({
                  src: 'https://www.youtube.com/s/desktop/21ad9f7d/img/favicon.ico',
                  class: 'icon bookmark-icon',
                }),
                VideoEmbed('B11XBZmIIZc'),
              ]),
            ]),
            Img({
              src: 'https://i.ytimg.com/vi/B11XBZmIIZc/hqdefault.jpg',
              class: 'bookmark-image',
            }),
          ],
        ),
      ),
      p('simple tutorial how to animate with bones'),
      figure(
        Link(
          {
            to: 'https://www.youtube.com/watch?v=jbFjTFFwPsM',
            class: 'bookmark source',
          },
          [
            div({ class: 'bookmark-info' }, [
              div({ class: 'bookmark-text' }, [
                div(
                  { class: 'bookmark-title' },
                  'Blenders Armature For Beginners_The Basics To Get Started',
                ),
                div(
                  { class: 'bookmark-description' },
                  'If you want to learn about armatures in Blender, then I believe this tutorial will be helpful to you. I would assume that if you are watching this to learn a...',
                ),
              ]),
              div({ class: 'bookmark-href' }, [
                Img({
                  src: 'https://www.youtube.com/s/desktop/21ad9f7d/img/favicon.ico',
                  class: 'icon bookmark-icon',
                }),
                VideoEmbed('jbFjTFFwPsM'),
              ]),
            ]),
            Img({
              src: 'https://i.ytimg.com/vi/jbFjTFFwPsM/hqdefault.jpg',
              class: 'bookmark-image',
            }),
          ],
        ),
      ),
      h2(
        {
          class: 'block-color-purple_background',
        },
        '05. Sculpting Character and other stuff in Blender',
      ),
      ul(li([span('sculpting in Blender')])),
      ul(
        li([
          span(
            { class: 'to-do-children-unchecked' },
            'Edit Mode advanced (proportional editing, extrude, intersect and modifiers)',
          ),
        ]),
      ),
      ul(li([span('Sculpting with Skin Modifier')])),
      figure(
        Link(
          {
            to: 'https://www.youtube.com/watch?v=KsDe1V9Dl-0',
            class: 'bookmark source',
          },
          [
            div({ class: 'bookmark-info' }, [
              div({ class: 'bookmark-text' }, [
                div(
                  { class: 'bookmark-title' },
                  'How to Sculpt a 3d Character Bust in Blender 2.90 - Step by Step Easy Walkthrough',
                ),
                div(
                  { class: 'bookmark-description' },
                  'Hiya! This video tutorial will show how to sculpt and design characters by sketching directly in 3d using Blender. This is a quick way to make character desi...',
                ),
              ]),
              div({ class: 'bookmark-href' }, [
                Img({
                  src: 'https://www.youtube.com/s/desktop/e9a67dcd/img/favicon.ico',
                  class: 'icon bookmark-icon',
                }),
                VideoEmbed('KsDe1V9Dl-0'),
              ]),
            ]),
            Img({
              src: 'https://i.ytimg.com/vi/KsDe1V9Dl-0/hqdefault.jpg',
              class: 'bookmark-image',
            }),
          ],
        ),
      ),
      p(
        {
          class: 'block-color-gray_background',
        },
        'yt: MarshmammL',
      ),
      p('Sculpt with SKIN MODIFIER (GREAT TUTORIAL) Blender 2.92 min needed'),
      figure(
        Link(
          {
            to: 'https://www.youtube.com/watch?v=DAAwy_l4jw4&t=1142s',
            class: 'bookmark source',
          },
          [
            div({ class: 'bookmark-info' }, [
              div({ class: 'bookmark-text' }, [
                div(
                  { class: 'bookmark-title' },
                  'Fast Character Modeling with the Skin Modifier || Blender 2.93',
                ),
                div(
                  { class: 'bookmark-description' },
                  'Patreon, Gumroad, Discord, and other stuff:https://linktr.ee/JoeycarlinoIntro 0:00Summary 0:41Setup / Skin Modifier Basics 1:12Character Start / Root 4:25Ad...',
                ),
              ]),
              div({ class: 'bookmark-href' }, [
                Img({
                  src: 'https://www.youtube.com/s/desktop/7b8b5af6/img/favicon.ico',
                  class: 'icon bookmark-icon',
                }),
                VideoEmbed('DAAwy_l4jw4&t=1142s'),
              ]),
            ]),
            Img({
              src: 'https://i.ytimg.com/vi/DAAwy_l4jw4/hqdefault.jpg',
              class: 'bookmark-image',
            }),
          ],
        ),
      ),
      p('ng fast'),
      figure(
        Link(
          {
            to: 'https://www.youtube.com/watch?v=DAAwy_l4jw4',
            class: 'bookmark source',
          },
          [
            div({ class: 'bookmark-info' }, [
              div({ class: 'bookmark-text' }, [
                div(
                  { class: 'bookmark-title' },
                  'Fast Character Modeling with the Skin Modifier || Blender 2.93',
                ),
                div(
                  { class: 'bookmark-description' },
                  'Patreon, Gumroad, Discord, and other stuff:https://linktr.ee/JoeycarlinoIntro 0:00Summary 0:41Setup / Skin Modifier Basics 1:12Character Start / Root 4:25Ad...',
                ),
              ]),
              div({ class: 'bookmark-href' }, [
                Img({
                  src: 'https://www.youtube.com/s/desktop/01530da7/img/favicon.ico',
                  class: 'icon bookmark-icon',
                }),
                VideoEmbed('DAAwy_l4jw4'),
              ]),
            ]),
            Img({
              src: 'https://i.ytimg.com/vi/DAAwy_l4jw4/hqdefault.jpg',
              class: 'bookmark-image',
            }),
          ],
        ),
      ),
      h2(
        {
          class: 'block-color-pink_background',
        },
        '6. Animation and Rigging Character',
      ),
      ul(li([span('simple Tools')])),
      ul(li([span('soo much to cover so wait for your input')])),
      p('12 principles of animation (good to know)'),
      figure(
        Link(
          {
            to: 'https://www.youtube.com/watch?v=uDqjIdI4bF4',
            class: 'bookmark source',
          },
          [
            div({ class: 'bookmark-info' }, [
              div({ class: 'bookmark-text' }, [
                div(
                  { class: 'bookmark-title' },
                  '12 Principles of Animation (Official Full Series)',
                ),
                div(
                  { class: 'bookmark-description' },
                  'Further Animation Learning: http://bit.ly/2dleXfHFull playlist: https://www.youtube.com/playlist?list=PL-bOh8btec4CXd2ya1NmSKpi92U_l6ZJd(0:10) 1. Squash and ...',
                ),
              ]),
              div({ class: 'bookmark-href' }, [
                Img({
                  src: 'https://www.youtube.com/s/desktop/3cbce0d4/img/favicon.ico',
                  class: 'icon bookmark-icon',
                }),
                VideoEmbed('uDqjIdI4bF4'),
              ]),
            ]),
            Img({
              src: 'http://i.ytimg.com/vi/uDqjIdI4bF4/hqdefault.jpg',
              class: 'bookmark-image',
            }),
          ],
        ),
      ),
      p(
        {
          class: 'block-color-gray_background',
        },
        'yt: AlanBeckerTutorials',
      ),
      p('Walk Cycle'),
      figure(
        Link(
          {
            to: 'https://www.youtube.com/watch?v=B5h2HvkqXZ0',
            class: 'bookmark source',
          },
          [
            div({ class: 'bookmark-info' }, [
              div({ class: 'bookmark-text' }, [
                div({ class: 'bookmark-title' }, 'Simple Walk Cycle in Blender 2.81'),
                div(
                  { class: 'bookmark-description' },
                  'In this video I make a super simple walk cycle for a low poly character in Blender 2.81. Be sure to check out my previous videos about low poly modeling, arm...',
                ),
              ]),
              div({ class: 'bookmark-href' }, [
                Img({
                  src: 'https://www.youtube.com/s/desktop/3cbce0d4/img/favicon.ico',
                  class: 'icon bookmark-icon',
                }),
                VideoEmbed('B5h2HvkqXZ0'),
              ]),
            ]),
            Img({
              src: 'https://i.ytimg.com/vi/B5h2HvkqXZ0/hqdefault.jpg',
              class: 'bookmark-image',
            }),
          ],
        ),
      ),
      p(
        {
          class: 'block-color-gray_background',
        },
        'yt: Imphenzia',
      ),
      p(
        {
          class: 'block-color-purple_background',
        },
        'Helpful tools: ',
      ),
      ul(
        li([
          b('MIXAMO'),
          figure(
            Link(
              { to: 'https://www.mixamo.com/#/', class: 'bookmark source' },
              div({ class: 'bookmark-info' }, [
                div({ class: 'bookmark-text' }, div({ class: 'bookmark-title' }, 'Mixamo')),
                div({ class: 'bookmark-href' }, [
                  Img({
                    src: 'https://www.mixamo.com/favicon.ico',
                    class: 'icon bookmark-icon',
                  }),
                  'https://www.mixamo.com/#/',
                ]),
              ]),
            ),
          ),
          p('copy animation to another rig'),
          figure(
            Link(
              {
                to: 'https://www.youtube.com/watch?v=NjpXXI7ZLN0',
                class: 'bookmark source',
              },
              [
                div({ class: 'bookmark-info' }, [
                  div({ class: 'bookmark-text' }, [
                    div(
                      { class: 'bookmark-title' },
                      'Daily Blender Secrets - Copy animation from one object to another',
                    ),
                    div(
                      { class: 'bookmark-description' },
                      'b3d #blender #secrets #tutorialVisit my website: https://www.blendersecrets.org/booke-Book bundle (20% Discount) : https://gumroad.com/l/IxofeY',
                    ),
                  ]),
                  div({ class: 'bookmark-href' }, [
                    Img({
                      src: 'https://www.youtube.com/s/desktop/bbdfaf0a/img/favicon.ico',
                      class: 'icon bookmark-icon',
                    }),
                    VideoEmbed('NjpXXI7ZLN0'),
                  ]),
                ]),
                Img({
                  src: 'https://i.ytimg.com/vi/NjpXXI7ZLN0/hqdefault.jpg',
                  class: 'bookmark-image',
                }),
              ],
            ),
          ),
          p('Addon for Blender (helps to animate rig better)'),
          figure(
            Link(
              {
                to: 'https://medium.com/@noorani.hasnain3/improve-your-animation-workflow-with-blenders-new-mixamo-add-on-637bf3f0d812',
                class: 'bookmark source',
              },
              [
                div({ class: 'bookmark-info' }, [
                  div({ class: 'bookmark-text' }, [
                    div(
                      { class: 'bookmark-title' },
                      'Improve your animation workflow with Blender&#x27;s new Mixamo add-on',
                    ),
                    div(
                      { class: 'bookmark-description' },
                      'Mixamo is an online platform used by many developers, artists, and studios dedicated to the CG industry. Its automated rigging process has made the animation workflow extremely easy even for an amateur and the huge library of motion capture animations helps kickstart their projects without the need for a professional animator or a motion capture suit.',
                    ),
                  ]),
                  div(
                    { class: 'bookmark-href' },
                    'https://medium.com/@noorani.hasnain3/improve-your-animation-workflow-with-blenders-new-mixamo-add-on-637bf3f0d812',
                  ),
                ]),
                Img({
                  src: 'https://miro.medium.com/max/1200/0*JpDUf5jX4bId8WLm',
                  class: 'bookmark-image',
                }),
              ],
            ),
          ),
        ]),
      ),
      ul(
        li([
          'DeepMotion Portal',
          div([
            figure(
              {
                class: 'block-color-gray_background callout',
                style: 'white-space:pre-wrap;display:flex',
              },
              [
                div({ style: 'font-size:1.5em' }, span({ class: 'icon' }, '😆')),
                div({ style: 'width:100%' }, 'CREATE ANIMATION WITH YOUR OWN CHARACTER'),
              ],
            ),
            figure(
              Link(
                {
                  to: 'https://portal.deepmotion.com/',
                  class: 'bookmark source',
                },
                div({ class: 'bookmark-info' }, [
                  div(
                    { class: 'bookmark-text' },
                    div({ class: 'bookmark-title' }, 'DeepMotion Portal'),
                  ),
                  div({ class: 'bookmark-href' }, [
                    Img({
                      src: 'https://portal.deepmotion.com/favicon.png',
                      class: 'icon bookmark-icon',
                    }),
                    'https://portal.deepmotion.com/',
                  ]),
                ]),
              ),
            ),
            p('Tutorial:'),
            figure(
              Link(
                {
                  to: 'https://www.youtube.com/watch?v=ku0zMs5sUew',
                  class: 'bookmark source',
                },
                [
                  div({ class: 'bookmark-info' }, [
                    div({ class: 'bookmark-text' }, [
                      div(
                        { class: 'bookmark-title' },
                        'Automatic motion capture with Deepmotion and Blender',
                      ),
                      div(
                        { class: 'bookmark-description' },
                        'In this short video, DJ shows how he uses a new Deepmotion.com online service to turn a video of himself moving into an animated 3D character. To achieve thi...',
                      ),
                    ]),
                    div({ class: 'bookmark-href' }, [
                      Img({
                        src: 'https://www.youtube.com/s/desktop/10a668f6/img/favicon.ico',
                        class: 'icon bookmark-icon',
                      }),
                      VideoEmbed('ku0zMs5sUew'),
                    ]),
                  ]),
                  Img({
                    src: 'https://i.ytimg.com/vi/ku0zMs5sUew/hqdefault.jpg',
                    class: 'bookmark-image',
                  }),
                ],
              ),
            ),
          ]),
        ]),
      ),
      h3(
        {
          class: 'block-color-pink_background',
        },
        'Character Animation with Rigify - pretty complicated',
      ),
      ul(
        li([mark({ class: 'highlight-teal_background' }, 'Rigify '), '(explains awesome rigging)']),
      ),
      figure(
        Link(
          {
            to: 'https://www.youtube.com/watch?v=gqvH0Qj-aus&t=478s',
            class: 'bookmark source',
          },
          [
            div({ class: 'bookmark-info' }, [
              div({ class: 'bookmark-text' }, [
                div(
                  { class: 'bookmark-title' },
                  'Introduction to RIGIFY - The SECRETS of RIGIFY: Part 1 [Blender 2.8]',
                ),
                div(
                  { class: 'bookmark-description' },
                  '💬 In part one of "The SECRETS of BLENDER&#x27;s RIGIFY: Unleash the power of blender&#x27;s built in autorig." we try to understand the bare bones of rigify and what ...',
                ),
              ]),
              div({ class: 'bookmark-href' }, [
                Img({
                  src: 'https://www.youtube.com/s/desktop/cae8a583/img/favicon.ico',
                  class: 'icon bookmark-icon',
                }),
                VideoEmbed('gqvH0Qj-aus&t=478s'),
              ]),
            ]),
            Img({
              src: 'https://i.ytimg.com/vi/gqvH0Qj-aus/hqdefault.jpg',
              class: 'bookmark-image',
            }),
          ],
        ),
      ),
      ul(
        li(
          { style: 'list-style-type:disc' },
          mark({ class: 'highlight-teal_background' }, 'Rig a fish'),
        ),
      ),
      figure(
        Link(
          {
            to: 'https://www.youtube.com/watch?v=yKc6AFvPsUQ',
            class: 'bookmark source',
          },
          [
            div({ class: 'bookmark-info' }, [
              div({ class: 'bookmark-text' }, [
                div({ class: 'bookmark-title' }, 'CREATE A DYNAMIC FISH: Quick Tip [Blender 2.8]'),
                div(
                  { class: 'bookmark-description' },
                  '💬 Check out this little tip on how to create a fish that moves with dynamically driven bones!.Sorry for the video resolution, I used to have an ultra wide s...',
                ),
              ]),
              div({ class: 'bookmark-href' }, [
                Img({
                  src: 'https://www.youtube.com/s/desktop/cae8a583/img/favicon.ico',
                  class: 'icon bookmark-icon',
                }),
                VideoEmbed('yKc6AFvPsUQ'),
              ]),
            ]),
            Img({
              src: 'https://i.ytimg.com/vi/yKc6AFvPsUQ/hqdefault.jpg',
              class: 'bookmark-image',
            }),
          ],
        ),
      ),
      ul(li('RIG (simple character)')),
      figure(
        Link(
          {
            to: 'https://www.youtube.com/watch?v=vX4vu3MMO-c&t=1320s',
            class: 'bookmark source',
          },
          div({ class: 'bookmark-info' }, [
            div(
              { class: 'bookmark-text' },
              div(
                { class: 'bookmark-title' },
                'https://www.youtube.com/watch?v=vX4vu3MMO-c&t=1320s',
              ),
            ),
            div({ class: 'bookmark-href' }, 'https://www.youtube.com/watch?v=vX4vu3MMO-c&t=1320s'),
          ]),
        ),
      ),
      figure(
        Link(
          {
            to: 'https://www.youtube.com/watch?v=6nmT123wVe4',
            class: 'bookmark source',
          },
          [
            div({ class: 'bookmark-info' }, [
              div({ class: 'bookmark-text' }, [
                div({ class: 'bookmark-title' }, 'Easy Mouth Rig || Blender 2.93'),
                div(
                  { class: 'bookmark-description' },
                  'Easy Character Modeling:https://youtu.be/S7zRQjDQmS0Gumroad, Discord, and other stuff:https://linktr.ee/JoeycarlinoIntro sounds by Samaquias Lorta:https://ww...',
                ),
              ]),
              div({ class: 'bookmark-href' }, [
                Img({
                  src: 'https://www.youtube.com/s/desktop/7b8b5af6/img/favicon.ico',
                  class: 'icon bookmark-icon',
                }),
                VideoEmbed('6nmT123wVe4'),
              ]),
            ]),
            Img({
              src: 'https://i.ytimg.com/vi/6nmT123wVe4/hqdefault.jpg',
              class: 'bookmark-image',
            }),
          ],
        ),
      ),
      p(
        {
          class: 'block-color-gray_background',
        },
        'yt: PIXXO 3D',
      ),
      figure(
        Link(
          {
            to: 'https://www.reallusion.com/character-creator/?utm_source=asknk&utm_medium=affiliate&utm_campaign=outbound&utm_term=Character%20Creator%203%20Pipeline',
            class: 'bookmark source',
          },
          [
            div({ class: 'bookmark-info' }, [
              div({ class: 'bookmark-text' }, [
                div(
                  { class: 'bookmark-title' },
                  'Character Creator - Fast Create Realistic and Stylized Characters',
                ),
                div(
                  { class: 'bookmark-description' },
                  'Character Creator 3 is a full character creation solution for designers to easily create, import and customize stylized or realistic looking character assets for use with iClone, Maya, Blender, Unreal Engine 4, Unity or any other 3D tools. It connects industry leading pipelines into one system for 3D character generation, animation, rendering, and interactive design.',
                ),
              ]),
              div({ class: 'bookmark-href' }, [
                Img({
                  src: 'https://www.reallusion.com/favicon.ico',
                  class: 'icon bookmark-icon',
                }),
                'https://www.reallusion.com/character-creator/?utm_source=asknk&utm_medium=affiliate&utm_campaign=outbound&utm_term=Character%20Creator%203%20Pipeline',
              ]),
            ]),
            Img({
              src: 'https://www.reallusion.com/character-creator/includes/images/character-creator-OG.jpg?200723',
              class: 'bookmark-image',
            }),
          ],
        ),
      ),
      h2(
        {
          class: 'block-color-pink_background',
        },
        '7. Render images out of Blender and export GLTF',
      ),
      ul(li([span('render out images in Blender')])),
      ul(li([span('use Cycles Render engine ')])),
      ul(li([span('export GLTF')])),
      p('How to render 360 images out of blender'),
      figure(
        Link(
          {
            to: 'https://www.youtube.com/watch?v=w_pAVCv64gw&feature=youtu.be',
            class: 'bookmark source',
          },
          [
            div({ class: 'bookmark-info' }, [
              div({ class: 'bookmark-text' }, [
                div(
                  { class: 'bookmark-title' },
                  'How to Create 360 Panorama in Blender (Tutorial)',
                ),
                div(
                  { class: 'bookmark-description' },
                  '► Blender Interior Scene used in the video ◄https://store.chocofur.com/interior-scene-06► Learn more about 360 Panoramas ◄https://learn.chocofur.com/create-3...',
                ),
              ]),
              div({ class: 'bookmark-href' }, [
                Img({
                  src: 'https://www.youtube.com/s/desktop/1f1401a5/img/favicon.ico',
                  class: 'icon bookmark-icon',
                }),
                'https://www.youtube.com/watch?v=w_pAVCv64gw&feature=youtu.be',
              ]),
            ]),
            Img({
              src: 'https://i.ytimg.com/vi/w_pAVCv64gw/hqdefault.jpg',
              class: 'bookmark-image',
            }),
          ],
        ),
      ),
      h2(
        {
          class: 'block-color-red_background',
        },
        '7.1 Python in Blender Little Insight',
      ),
      p('e.g.'),
      Pre(`
// Python script to add to each vertices on bone, and orient normal to z

import bpy
from mathutils import Vector

def AddBonesAtVertices(length, use_normals):
    objects = bpy.context.view_layer.objects
    obj = objects.active
    if not obj or obj.type != &#x27;MESH&#x27;:
        return

    points = []
    normals = []
    data = []
    for v in obj.data.vertices:
        p = obj.matrix_world @ v.co
        target = v.normal @ obj.matrix_world
        dir = target - p
        dir.normalize()
        dir = dir * length
        n = p + dir * (-1)
        points.append(p)
        if not use_normals:
            n = Vector((p[0], p[1], p[2] + length))
        normals.append(n)
        data.append([p, n])

    amt = bpy.data.armatures.new(obj.name + "_vBones")
    rig = bpy.data.objects.new(obj.name + &#x27;_vRig&#x27;, amt)

    bpy.context.collection.objects.link(rig)
    objects.active = rig

    bpy.ops.object.editmode_toggle()
    for i, l in enumerate(zip(points, normals)):
        bone = amt.edit_bones.new(str(i))
        bone.head = l[0]
        bone.tail = l[1]
    bpy.ops.object.editmode_toggle()



bpy.ops.object.mode_set(mode=&#x27;OBJECT&#x27;)
AddBonesAtVertices(0.5, True)`),

      p('tbd. '),
      hr({ id: '76338f66-fc6b-4108-9987-9d270a55ec68' }),
      div([
        div(
          {
            style: 'width:50%',
            class: 'column',
          },
          [
            p('Litto'),
            p('thesystemcollective@gmail.com'),
            p(Link({ to: 'https://artificialmuseum.com/' }, 'artificialmuseum.com')),
            p(Link({ to: 'https://thesystem.at/' }, 'thesystem.at')),
            p(Link({ to: 'https://litto.work/' }, 'litto.work')),
          ],
        ),
      ]),
    ]),
  ]),
]
