import { atomWithStorage } from 'jotai/utils'

const drawerOpenAtom = atomWithStorage('drawerOpen', false)

export default drawerOpenAtom
