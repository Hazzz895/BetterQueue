import { FormModal, IconButton, Tooltip, defineAddon, logger, notifications, openModal, storage, useCurrentTrack } from '@pulsesync/addon-sdk'

import addonConfig from '../addon.config.mjs'
import { settings } from './settings'

export default defineAddon({
    id: addonConfig.id,
    name: addonConfig.name,
    settings,
    trackMenuItems: [
        {
            id: 'check-webhost',
            label: 'Проверить WebHost',
            icon: 'info',
            position: 1,
            onClick: ({ track }) => {
                const album = track.albumId ? `, album ${track.albumId}` : ''
                return notifications.info(`Track ${track.id}${album}`)
            },
        },
    ],
})
