import electron from 'electron'
import { writeFile } from 'fs'

export default {
  methods: {
    electron_openExternal (url) {
      electron.shell.openExternal(url)
    },

    electron_reload () {
      const win = electron.remote.getCurrentWindow()
      win.reload()
    },

    electron_writeFile (raw, defaultPath, extensions = ['.json']) {
      return new Promise((resolve, reject) => {
        electron.remote.dialog.showSaveDialog({
          defaultPath,
          filters: [{ extensions }]
        }, fileName => {
          if (!fileName) return

          writeFile(fileName, raw, 'utf8', err => {
            if (err) reject(err)
            resolve(fileName)
          })
        })
      })
    },

    /**
     *
     * @param {Object} config
     * @param {String} config.protocol
     * @param {String} config.host
     * @param {String} config.port
     * @param {String} config.username
     * @param {String} config.password
     * @returns Promise<void>
     */
    electron_setProxy (config) {
      const { protocol, host, port, username, password } = config
      const credentials = username.length ? `${username}:${password}@` : ''
      const uri = `${protocol}://${credentials}${host}:${port}`

      const webContents = electron.remote.getCurrentWindow().webContents

      return new Promise((resolve, reject) => {
        if (webContents && webContents.session) {
          webContents.session.setProxy({
            proxyRules: uri
          }, () => {
            resolve()
          })
        } else {
          reject(new Error())
        }
      })
    }
  }
}
