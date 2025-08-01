---
enable: true # Control the visibility of this section across all pages where it is used
title: Registro de Cambios - **Novedades**

list:
  - title: Prioridad para proyectos
    version: 0.12.5
    date: 02 Feb, 2024
    content: |
      semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit
    video:
      src: /videos/test-video.mp4
      type: mp3 # video type eg: mp4, webm etc
      provider: html5 # "youtube" | "vimeo" | "html5" (default is "youtube")
      poster: /images/video-thumbnail.jpg # Optional: URL or image path for video thumbnail
      autoplay: true # Optional: true to autoplay, false to start manually (default is false)
      id: test-changelog-video # required if same video is used on multiple time on same page
    types:
      - icon: /images/icons/svg/feature.svg
        label: Nueva Funcionalidad
      - icon: /images/icons/svg/improvement.svg
        label: Mejora
      - icon: /images/icons/svg/check-rounded.svg
        label: Corrección
      - icon: /images/icons/svg/security.svg
        label: Seguridad
      - icon: /images/icons/svg/deprecated.svg
        label: Obsoleto
      - icon: /images/icons/svg/timeframe.svg
        label: Cambio Importante
    changes:
      - active: true
        title: Correcciones
        list:
          - label: Ciclos
            color: emerald # emerald | indigo | slate | crimson | amber
            content: |
              La numeración automática de Ciclos que terminan con un número ahora funcionará en más casos
          - label: Archivo
            color: indigo # emerald | indigo | slate | crimson | amber
            content: |
              Las relaciones padre de problemas ahora se preservan después de que los proyectos se restauran del archivo
          - label: Tablero
            color: slate # emerald | indigo | slate | crimson | amber
            content: |
              Se corrigieron problemas con los encabezados de columnas del tablero que no se truncaban adecuadamente
          - label: Slack
            color: crimson # emerald | indigo | slate | crimson | amber
            content: |
              Ahora desplegamos menciones de identificadores de problemas en Slack solo si el mensaje fue publicado por un usuario de Slack que también es usuario en el workspace de Linear
          - label: Plantillas
            color: amber # emerald | indigo | slate | crimson | amber
            content: |
              Se corrigió la URL para crear plantillas de proyecto que no funcionaba después de desaprobar roadmap
      - active: false
        title: Mejoras
        list:
          - label: Ciclos
            color: emerald # emerald | indigo | slate | crimson | amber
            content: |
              La numeración automática de Ciclos que terminan con un número ahora funcionará en más casos
          - label: Archivo
            color: indigo # emerald | indigo | slate | crimson | amber
            content: |
              Las relaciones padre de problemas ahora se preservan después de que los proyectos se restauran del archivo
          - label: Tablero
            color: slate # emerald | indigo | slate | crimson | amber
            content: |
              Se corrigieron problemas con los encabezados de columnas del tablero que no se truncaban adecuadamente
          - label: Slack
            color: crimson # emerald | indigo | slate | crimson | amber
            content: |
              Ahora desplegamos menciones de identificadores de problemas en Slack solo si el mensaje fue publicado por un usuario de Slack que también es usuario en el workspace de Linear
          - label: Plantillas
            color: amber # emerald | indigo | slate | crimson | amber
            content: |
              Se corrigió la URL para crear plantillas de proyecto que no funcionaba después de desaprobar roadmap

  - title: Un nuevo hogar para tus proyectos
    version: 0.10.5
    date: 02 Ene, 2024
    content: |
      semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
    video:
      src: /videos/test-video.mp4
      type: mp3 # video type eg: mp4, webm etc
      provider: html5 # "youtube" | "vimeo" | "html5" (default is "youtube")
      poster: /images/video-thumbnail.jpg # Optional: URL or image path for video thumbnail
      autoplay: true # Optional: true to autoplay, false to start manually (default is false)
      id: test-changelog-video # required if same video is used on multiple time on same page
    types:
      - icon: /images/icons/svg/feature.svg
        label: Nueva Funcionalidad
      - icon: /images/icons/svg/improvement.svg
        label: Mejora
      - icon: /images/icons/svg/check-rounded.svg
        label: Corrección
    changes:
      - active: true
        title: Correcciones
        list:
          - label: Ciclos
            color: emerald # emerald | indigo | slate | crimson | amber
            content: |
              La numeración automática de Ciclos que terminan con un número ahora funcionará en más casos
          - label: Archivo
            color: indigo # emerald | indigo | slate | crimson | amber
            content: |
              Las relaciones padre de problemas ahora se preservan después de que los proyectos se restauran del archivo
          - label: Tablero
            color: slate # emerald | indigo | slate | crimson | amber
            content: |
              Se corrigieron problemas con los encabezados de columnas del tablero que no se truncaban adecuadamente
      - active: false
        title: Mejoras
        list:
          - label: Ciclos
            color: emerald # emerald | indigo | slate | crimson | amber
            content: |
              La numeración automática de Ciclos que terminan con un número ahora funcionará en más casos
          - label: Archivo
            color: indigo # emerald | indigo | slate | crimson | amber
            content: |
              Las relaciones padre de problemas ahora se preservan después de que los proyectos se restauran del archivo
          - label: Tablero
            color: slate # emerald | indigo | slate | crimson | amber
            content: |
              Se corrigieron problemas con los encabezados de columnas del tablero que no se truncaban adecuadamente
          - label: Slack
            color: crimson # emerald | indigo | slate | crimson | amber
            content: |
              Ahora desplegamos menciones de identificadores de problemas en Slack solo si el mensaje fue publicado por un usuario de Slack que también es usuario en el workspace de Linear
          - label: Plantillas
            color: amber # emerald | indigo | slate | crimson | amber
            content: |
              Se corrigió la URL para crear plantillas de proyecto que no funcionaba después de desaprobar roadmap

  - title: "Passkeys: Una forma rápida y segura de iniciar sesión en Upstart"
    version: 0.8.5
    date: 02 Feb, 2023
    content: |
      semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero
    video:
      src: /videos/test-video.mp4
      type: mp3 # video type eg: mp4, webm etc
      provider: html5 # "youtube" | "vimeo" | "html5" (default is "youtube")
      poster: /images/video-thumbnail.jpg # Optional: URL or image path for video thumbnail
      autoplay: true # Optional: true to autoplay, false to start manually (default is false)
      id: test-changelog-video # required if same video is used on multiple time on same page
    types:
      - icon: /images/icons/svg/feature.svg
        label: Nueva Funcionalidad
      - icon: /images/icons/svg/improvement.svg
        label: Mejora
    changes:
      - active: true
        title: Correcciones
        list:
          - label: Ciclos
            color: emerald # emerald | indigo | slate | crimson | amber
            content: |
              La numeración automática de Ciclos que terminan con un número ahora funcionará en más casos
          - label: Archivo
            color: indigo # emerald | indigo | slate | crimson | amber
            content: |
              Las relaciones padre de problemas ahora se preservan después de que los proyectos se restauran del archivo
          - label: Tablero
            color: slate # emerald | indigo | slate | crimson | amber
            content: |
              Se corrigieron problemas con los encabezados de columnas del tablero que no se truncaban adecuadamente
          - label: Slack
            color: crimson # emerald | indigo | slate | crimson | amber
            content: |
              Ahora desplegamos menciones de identificadores de problemas en Slack solo si el mensaje fue publicado por un usuario de Slack que también es usuario en el workspace de Linear
          - label: Plantillas
            color: amber # emerald | indigo | slate | crimson | amber
            content: |
              Se corrigió la URL para crear plantillas de proyecto que no funcionaba después de desaprobar roadmap
      - active: false
        title: Mejoras
        list:
          - label: Ciclos
            color: emerald # emerald | indigo | slate | crimson | amber
            content: |
              La numeración automática de Ciclos que terminan con un número ahora funcionará en más casos
          - label: Archivo
            color: indigo # emerald | indigo | slate | crimson | amber
            content: |
              Las relaciones padre de problemas ahora se preservan después de que los proyectos se restauran del archivo
          - label: Tablero
            color: slate # emerald | indigo | slate | crimson | amber
            content: |
              Se corrigieron problemas con los encabezados de columnas del tablero que no se truncaban adecuadamente
          - label: Slack
            color: crimson # emerald | indigo | slate | crimson | amber
            content: |
              Ahora desplegamos menciones de identificadores de problemas en Slack solo si el mensaje fue publicado por un usuario de Slack que también es usuario en el workspace de Linear
          - label: Plantillas
            color: amber # emerald | indigo | slate | crimson | amber
            content: |
              Se corrigió la URL para crear plantillas de proyecto que no funcionaba después de desaprobar roadmap
---
