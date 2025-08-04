---
enable: true # Control the visibility of this section across all pages where it is used
title: "Entre em Contato para Mais **Informações**"
description: "Seja procurando assistência especializada, nossa equipe dedicada está preparada para apoiá-lo a cada passo do caminho."
subtitle: "Contato"
draft: false

contact_list:
  enable: true
  list:
    - icon: "/images/icons/svg/phone.svg"
      label: "Ligue agora"
      value: "+57 320 545 1915"
    - icon: "/images/icons/svg/email.svg"
      label: "Envie um email"
      value: "hi@nubesti.com"
    - icon: "/images/icons/svg/whatsapp.svg"
      label: "Converse conosco"
      value: "@nubesti"

social:
  enable: true
  title: "Siga-nos nas redes sociais"
  # uncomment below list if you want to override `src/config/social.json` data
  # list:
  #   - enable: true
  #     label: "facebook"
  #     icon: "/images/icons/svg/facebook.svg"
  #     url: "/"

# Check config.toml file for form action related settings
form:
  email_subject: "Nova submissão de formulário do site upstart" # Customized email subject (applicable when anyone submit form, form submission may receive by email depend on provider)
  submit_button:
    label: "Enviar"
  # This note will show at the end of form
  # note: |
  #   Seus dados estão seguros conosco. Respeitamos sua privacidade e nunca compartilhamos suas informações. <br /> Leia nossa [Política de Privacidade](/pt/privacy-policy/).
  inputs:
    - label: ""
      placeholder: "Nome Completo"
      name: "Nome Completo" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      half_width: true
      default_value: ""
    - label: ""
      placeholder: "Endereço de Email"
      name: "Endereço de Email" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      type: "email"
      half_width: true
      default_value: ""
    - label: ""
      placeholder: "Número de Telefone"
      name: "Número de Telefone" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      type: "text"
      half_width: true
      default_value: ""
    - label: ""
      placeholder: "Empresa"
      name: "Empresa" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      type: "text"
      half_width: true
      default_value: ""
    - label: ""
      placeholder: "Assunto"
      name: "Assunto" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      half_width: true
      dropdown:
        type: "" # select | search - default is select
        search: # if type is search then it will work
          placeholder: ""
        items:
          - label: "Suporte"
            value: "Suporte"
          - label: "Demo"
            value: "Demo"
          - label: "Outro"
            value: "Outro"
    - label: ""
      placeholder: "Assunto com Busca"
      name: "Assunto com Busca" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      half_width: true
      dropdown:
        type: "search" # select | search - default is select
        search: # if type is search then it will work
          placeholder: "Assunto com Busca"
        items:
          - label: "Suporte"
            value: "Suporte"
          - label: "Vendas"
            value: "Vendas"
    - label: ""
      tag: "textarea"
      default_value: ""
      rows: "4" # Only work if tag is textarea
      placeholder: "Digite sua mensagem."
      name: "Mensagem" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      half_width: false
    - label: "Busca Google" # only valid for type="checkbox" & type === "radio"
      checked: false # only valid for type="checkbox" & type === "radio"
      name: "Fonte do Usuário" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      group_label: "Como você soube sobre nós?" # Radio Inputs Label
      group: "source" # when you add group then it will omit space between the same group radio input
      type: "radio"
      half_width: true
      default_value: ""
    - label: "Redes Sociais" # only valid for type="checkbox" & type === "radio"
      name: "Fonte do Usuário" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      group_label: "" # Radio Inputs Label
      group: "source" # when you add group then it will omit space between the same group radio input
      type: "radio"
      half_width: true
      default_value: ""
    - label: "Indicação" # only valid for type="checkbox" & type === "radio"
      name: "Fonte do Usuário" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      group_label: "" # Radio Inputs Label
      group: "source" # when you add group then it will omit space between the same group radio input
      type: "radio"
      half_width: true
      default_value: ""
    - label: "Outro" # only valid for type="checkbox" & type === "radio"
      name: "Fonte do Usuário" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      group_label: "" # Radio Inputs Label
      group: "source" # when you add group then it will omit space between the same group radio input
      type: "radio"
      half_width: true
      default_value: ""
    - label: "Concordo com os termos e condições e [política de privacidade](/pt/contact/)." # only valid for type="checkbox" & type === "radio"
      name: "Privacidade Concordada" # This is crucial. Its indicate under which name you want to receive this field data
      value: "Concordado" # Value that will be submit (applicable for type="checkbox" & type === "radio")
      checked: false # only valid for type="checkbox" & type === "radio"
      required: true
      type: "checkbox"
      half_width: false
      default_value: ""
    - note: success # info | warning | success | deprecated | hint
      parent_class: "hidden message success"
      content: Recebemos sua mensagem! Entraremos em contato o mais breve possível.
    - note: warning # info | warning | success | deprecated | hint
      parent_class: "hidden message error"
      content: Algo deu errado! Use este email - [upstart-astro-theme@gmail.com](mailto:upstart-astro-theme@gmail.com) para enviar um ticket!
---
