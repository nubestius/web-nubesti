# Google Analytics & Search Console Setup Guide

Este documento explica cómo configurar Google Analytics 4 y Google Search Console para el sitio web de Nubesti.

## 📊 Google Analytics 4 (GA4) Setup

### 1. Crear cuenta de Google Analytics
1. Ve a [Google Analytics](https://analytics.google.com/)
2. Haz clic en "Start measuring"
3. Crea una cuenta para "Nubesti"
4. Configura una propiedad para el sitio web
5. Obtén el **Measurement ID** (formato: G-XXXXXXXXXX)

### 2. Configurar en el sitio web
1. Abre `src/config/config.toml`
2. Actualiza la sección `[analytics]`:
```toml
[analytics]
  google_analytics_id = "G-XXXXXXXXXX"  # Tu Measurement ID
  google_site_verification = ""
  enable_analytics = true
  enable_search_console = true
```

### 3. Eventos personalizados configurados
El sitio ya incluye tracking para:
- **Demos de seguridad**: Clics en botones "Book a Demo"
- **Interés en pricing**: Visitas a la página de precios
- **Formularios de contacto**: Envíos de formularios
- **Engagement con AI Red Team**: Interacciones con contenido principal
- **Cambios de idioma**: Switches entre EN/ES/FR
- **Reproducciones de video**: Clics en videos demostrativos
- **Interés en integraciones**: Exploración de integraciones

## 🔍 Google Search Console Setup

### 1. Verificar propiedad
1. Ve a [Google Search Console](https://search.google.com/search-console/)
2. Agrega una propiedad para `https://nubesti.com`
3. Elige "HTML tag" como método de verificación
4. Copia el código de verificación (solo la parte después de `content="`)

### 2. Configurar verificación
1. Abre `src/config/config.toml`
2. Agrega el código de verificación:
```toml
[analytics]
  google_analytics_id = "G-XXXXXXXXXX"
  google_site_verification = "tu-codigo-de-verificacion"  # Sin las comillas HTML
  enable_analytics = true
  enable_search_console = true
```

### 3. Enviar sitemaps
Una vez verificado, envía estos sitemaps:
- `https://nubesti.com/sitemap-index.xml` (principal)
- `https://nubesti.com/sitemap.xml` (páginas principales)
- `https://nubesti.com/sitemap-enhanced.xml` (páginas detalladas)

## 🎯 Objetivos y Conversiones Recomendados

### Google Analytics Goals
Configura estos objetivos en GA4:

1. **Demo Request** (Conversión primaria)
   - Evento: `security_demo_request`
   - Valor: 10

2. **Contact Form** (Lead generation)
   - Evento: `contact_form_submit`
   - Valor: 15

3. **Pricing Interest** (Engagement)
   - Evento: `pricing_page_view`
   - Valor: 3

4. **AI Red Team Engagement**
   - Evento: `ai_redteam_interest`
   - Valor: 5

5. **Language Engagement** (Multilingual)
   - Evento: `language_switch`
   - Valor: 1

## 📈 Métricas Clave a Monitorear

### Cybersecurity Focus
- **Keywords**: Penetration testing, AI security, red team, MITRE ATT&CK
- **Landing pages**: AI Red Team, Pricing, Integration
- **User flow**: Home → Features → Pricing → Contact
- **Geographic**: Performance por región/idioma
- **Technical**: Core Web Vitals, page speed

### Search Console KPIs
- **Indexación**: Páginas indexadas vs. enviadas
- **Keywords ranking**: Posiciones para términos de cybersecurity
- **CTR**: Click-through rate desde SERPs
- **Errores**: 404s, problemas de crawling
- **Rich results**: Performance de Schema.org

## 🔧 Privacy & GDPR Compliance

El sitio está configurado con:
- ✅ **IP Anonymization**: `anonymize_ip: true`
- ✅ **No Google Signals**: `allow_google_signals: false`
- ✅ **No Ad Personalization**: `allow_ad_personalization_signals: false`
- ✅ **Cookie controls**: Configuración de SameSite y Secure
- ✅ **Data retention**: 14 meses (recomendado)

## 🚀 Próximos Pasos

1. **Configurar IDs** en `config.toml`
2. **Deploy a producción** para activar tracking
3. **Verificar en Search Console**
4. **Enviar sitemaps**
5. **Configurar alertas** para errores críticos
6. **Setup conversiones** en GA4
7. **Crear dashboards** personalizados

## 📋 Checklist de Implementación

- [ ] Google Analytics account creado
- [ ] Measurement ID obtenido
- [ ] Search Console verificado
- [ ] IDs configurados en config.toml
- [ ] Site deployed con analytics
- [ ] Sitemaps enviados
- [ ] Conversiones configuradas
- [ ] Testing de eventos funcionando

## 🔍 Debugging

Para verificar que todo funciona:

1. **GA Real-time**: Ve a Reports → Real-time en GA4
2. **Browser DevTools**: Abre Network tab y busca llamadas a `google-analytics.com`
3. **GA Debugger**: Usa la extensión "Google Analytics Debugger"
4. **Search Console**: Verifica que no hay errores de indexación

## 📞 Soporte

Para problemas con la implementación:
- Revisa la consola del navegador para errores
- Verifica que los IDs están correctamente configurados
- Asegúrate de que el site está desplegado en producción
- Los eventos solo funcionan en el dominio configurado en GA4
