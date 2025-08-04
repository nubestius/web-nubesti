---
enable: true # Control the visibility of this section across all pages where it is used
draft: false
title: Changelog - **Novidades**

list:
  - title: Prioridade para projetos
    version: 0.12.5
    date: 02 Fev, 2024
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
        label: Nova Funcionalidade
      - icon: /images/icons/svg/improvement.svg
        label: Melhoria
      - icon: /images/icons/svg/check-rounded.svg
        label: Correção
      - icon: /images/icons/svg/security.svg
        label: Segurança
      - icon: /images/icons/svg/deprecated.svg
        label: Descontinuado
      - icon: /images/icons/svg/timeframe.svg
        label: Mudança Crítica
    changes:
      - active: true
        title: Correções
        list:
          - label: Ciclos
            color: emerald # emerald | indigo | slate | crimson | amber
            content: |
              Auto-numeração de Ciclos que terminam com um número agora funcionará em mais casos
          - label: Arquivo
            color: indigo # emerald | indigo | slate | crimson | amber
            content: |
              Relacionamentos pai de problemas agora são preservados após projetos serem restaurados do arquivo
          - label: Quadro
            color: slate # emerald | indigo | slate | crimson | amber
            content: |
              Corrigidos problemas com cabeçalhos de colunas do quadro não sendo truncados adequadamente
          - label: Slack
            color: crimson # emerald | indigo | slate | crimson | amber
            content: |
              Agora desdobramos menções de identificadores de problemas no Slack apenas se a mensagem foi postada por um usuário Slack que também é usuário no workspace Linear
          - label: Modelos
            color: amber # emerald | indigo | slate | crimson | amber
            content: |
              Corrigida URL para criar modelos de projeto não funcionando após descontinuação do roadmap
      - active: false
        title: Melhorias
        list:
          - label: Ciclos
            color: emerald # emerald | indigo | slate | crimson | amber
            content: |
              Auto-numeração de Ciclos que terminam com um número agora funcionará em mais casos
          - label: Arquivo
            color: indigo # emerald | indigo | slate | crimson | amber
            content: |
              Relacionamentos pai de problemas agora são preservados após projetos serem restaurados do arquivo
          - label: Quadro
            color: slate # emerald | indigo | slate | crimson | amber
            content: |
              Corrigidos problemas com cabeçalhos de colunas do quadro não sendo truncados adequadamente
          - label: Slack
            color: crimson # emerald | indigo | slate | crimson | amber
            content: |
              Agora desdobramos menções de identificadores de problemas no Slack apenas se a mensagem foi postada por um usuário Slack que também é usuário no workspace Linear
          - label: Modelos
            color: amber # emerald | indigo | slate | crimson | amber
            content: |
              Corrigida URL para criar modelos de projeto não funcionando após descontinuação do roadmap

  - title: Uma nova casa para seus projetos
    version: 0.10.5
    date: 02 Jan, 2024
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
        label: Nova Funcionalidade
      - icon: /images/icons/svg/improvement.svg
        label: Melhoria
      - icon: /images/icons/svg/check-rounded.svg
        label: Correção
    changes:
      - active: true
        title: Correções
        list:
          - label: Ciclos
            color: emerald # emerald | indigo | slate | crimson | amber
            content: |
              Auto-numeração de Ciclos que terminam com um número agora funcionará em mais casos
          - label: Arquivo
            color: indigo # emerald | indigo | slate | crimson | amber
            content: |
              Relacionamentos pai de problemas agora são preservados após projetos serem restaurados do arquivo
          - label: Quadro
            color: slate # emerald | indigo | slate | crimson | amber
            content: |
              Corrigidos problemas com cabeçalhos de colunas do quadro não sendo truncados adequadamente
      - active: false
        title: Melhorias
        list:
          - label: Ciclos
            color: emerald # emerald | indigo | slate | crimson | amber
            content: |
              Auto-numeração de Ciclos que terminam com um número agora funcionará em mais casos
          - label: Arquivo
            color: indigo # emerald | indigo | slate | crimson | amber
            content: |
              Relacionamentos pai de problemas agora são preservados após projetos serem restaurados do arquivo
          - label: Quadro
            color: slate # emerald | indigo | slate | crimson | amber
            content: |
              Corrigidos problemas com cabeçalhos de colunas do quadro não sendo truncados adequadamente
          - label: Slack
            color: crimson # emerald | indigo | slate | crimson | amber
            content: |
              Agora desdobramos menções de identificadores de problemas no Slack apenas se a mensagem foi postada por um usuário Slack que também é usuário no workspace Linear
          - label: Modelos
            color: amber # emerald | indigo | slate | crimson | amber
            content: |
              Corrigida URL para criar modelos de projeto não funcionando após descontinuação do roadmap

  - title: "Passkeys: Uma maneira rápida e segura de fazer login no Upstart"
    version: 0.8.5
    date: 02 Fev, 2023
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
        label: Nova Funcionalidade
      - icon: /images/icons/svg/improvement.svg
        label: Melhoria
    changes:
      - active: true
        title: Correções
        list:
          - label: Ciclos
            color: emerald # emerald | indigo | slate | crimson | amber
            content: |
              Auto-numeração de Ciclos que terminam com um número agora funcionará em mais casos
          - label: Arquivo
            color: indigo # emerald | indigo | slate | crimson | amber
            content: |
              Relacionamentos pai de problemas agora são preservados após projetos serem restaurados do arquivo
          - label: Quadro
            color: slate # emerald | indigo | slate | crimson | amber
            content: |
              Corrigidos problemas com cabeçalhos de colunas do quadro não sendo truncados adequadamente
          - label: Slack
            color: crimson # emerald | indigo | slate | crimson | amber
            content: |
              Agora desdobramos menções de identificadores de problemas no Slack apenas se a mensagem foi postada por um usuário Slack que também é usuário no workspace Linear
          - label: Modelos
            color: amber # emerald | indigo | slate | crimson | amber
            content: |
              Corrigida URL para criar modelos de projeto não funcionando após descontinuação do roadmap
      - active: false
        title: Melhorias
        list:
          - label: Ciclos
            color: emerald # emerald | indigo | slate | crimson | amber
            content: |
              Auto-numeração de Ciclos que terminam com um número agora funcionará em mais casos
          - label: Arquivo
            color: indigo # emerald | indigo | slate | crimson | amber
            content: |
              Relacionamentos pai de problemas agora são preservados após projetos serem restaurados do arquivo
          - label: Quadro
            color: slate # emerald | indigo | slate | crimson | amber
            content: |
              Corrigidos problemas com cabeçalhos de colunas do quadro não sendo truncados adequadamente
          - label: Slack
            color: crimson # emerald | indigo | slate | crimson | amber
            content: |
              Agora desdobramos menções de identificadores de problemas no Slack apenas se a mensagem foi postada por um usuário Slack que também é usuário no workspace Linear
          - label: Modelos
            color: amber # emerald | indigo | slate | crimson | amber
            content: |
              Corrigida URL para criar modelos de projeto não funcionando após descontinuação do roadmap
---
