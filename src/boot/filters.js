// import something here

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default ({ Vue } ) => {
  Vue.filter('strMaxLen', function (str, maxLen) {
    if (!str) return ''

    if (str.length > maxLen) {
      return str.substring(0, maxLen) + '...'
    }

    return str
  })
}
