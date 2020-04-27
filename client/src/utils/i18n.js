import i18n from '@/language'

export function i18nForRouteTitle (title) {
  const hasKey = this.$te(`routes.${title}`)

  if (hasKey) {
    const translatedTitle = this.$t(`routes.${title}`)

    return translatedTitle
  }
  return title
}

export function i18nForPageTitle (title) {
  const baseTitle = 'Sofia'
  const hasKey = i18n.te(`routes.${title}`)

  if (hasKey) {
    const pageName = i18n.t(`routes.${title}`)

    return `${pageName} - ${baseTitle}`
  }

  return `${baseTitle}`
}
