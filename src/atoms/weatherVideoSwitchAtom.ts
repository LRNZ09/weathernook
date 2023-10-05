import { atomWithStorage } from 'jotai/utils'

const weatherVideoSwitchAtom = atomWithStorage('weatherVideoSwitch', true)

export default weatherVideoSwitchAtom
