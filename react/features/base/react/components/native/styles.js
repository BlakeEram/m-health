import {
    BoxModel,
    ColorPalette,
    createStyleSheet
} from '../../../styles';

const AVATAR_OPACITY = 0.4;
const AVATAR_SIZE = 65;
const HEADER_COLOR = ColorPalette.blue;

// Header height is from iOS guidelines. Also, this looks good.
const HEADER_HEIGHT = 44;
const OVERLAY_FONT_COLOR = 'rgba(255, 255, 255, 0.6)';

export const HEADER_PADDING = BoxModel.padding;
export const STATUSBAR_COLOR = ColorPalette.blueHighlight;
export const SIDEBAR_WIDTH = 250;
export const UNDERLAY_COLOR = 'rgba(255, 255, 255, 0.2)';

const HEADER_STYLES = {
    /**
     * Platform specific header button (e.g. back, menu...etc).
     */
    headerButton: {
        alignSelf: 'center',
        color: ColorPalette.white,
        fontSize: 26,
        paddingRight: 22
    },

    /**
     * Style of the header overlay to cover the unsafe areas.
     */
    headerOverlay: {
        backgroundColor: HEADER_COLOR
    },

    /**
     * Generic style for a label placed in the header.
     */
    headerText: {
        color: ColorPalette.white,
        fontSize: 20
    },

    /**
     * The top-level element of a page.
     */
    page: {
        alignItems: 'stretch',
        bottom: 0,
        flex: 1,
        flexDirection: 'column',
        left: 0,
        overflow: 'hidden',
        position: 'absolute',
        right: 0,
        top: 0
    },

    /**
     * Base style of Header
     */
    screenHeader: {
        alignItems: 'center',
        backgroundColor: HEADER_COLOR,
        flexDirection: 'row',
        height: HEADER_HEIGHT,
        justifyContent: 'flex-start',
        padding: HEADER_PADDING
    }
};

const SECTION_LIST_STYLES = {
    /**
     * The style of the actual avatar.
     */
    avatar: {
        alignItems: 'center',
        backgroundColor: `rgba(23, 160, 219, ${AVATAR_OPACITY})`,
        borderRadius: AVATAR_SIZE,
        height: AVATAR_SIZE,
        justifyContent: 'center',
        width: AVATAR_SIZE
    },

    /**
     * List of styles of the avatar of a remote meeting (not the default
     * server). The number of colors are limited because they should match
     * nicely.
     */
    avatarColor1: {
        backgroundColor: `rgba(232, 105, 156, ${AVATAR_OPACITY})`
    },

    avatarColor2: {
        backgroundColor: `rgba(255, 198, 115, ${AVATAR_OPACITY})`
    },

    avatarColor3: {
        backgroundColor: `rgba(128, 128, 255, ${AVATAR_OPACITY})`
    },

    avatarColor4: {
        backgroundColor: `rgba(105, 232, 194, ${AVATAR_OPACITY})`
    },

    avatarColor5: {
        backgroundColor: `rgba(234, 255, 128, ${AVATAR_OPACITY})`
    },

    /**
     * The style of the avatar container that makes the avatar rounded.
     */
    avatarContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 5
    },

    /**
     * Simple {@code Text} content of the avatar (the actual initials).
     */
    avatarContent: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color: OVERLAY_FONT_COLOR,
        fontSize: 32,
        fontWeight: '100',
        textAlign: 'center'
    },

    /**
     * The top level container style of the list.
     */
    container: {
        flex: 1
    },

    list: {
        flex: 1,
        flexDirection: 'column'
    },

    listItem: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 5
    },

    listItemDetails: {
        flex: 1,
        flexDirection: 'column',
        overflow: 'hidden',
        paddingHorizontal: 5
    },

    listItemText: {
        color: OVERLAY_FONT_COLOR,
        fontSize: 14
    },

    listItemTitle: {
        fontWeight: 'bold',
        fontSize: 16
    },

    listSection: {
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        flex: 1,
        flexDirection: 'row',
        padding: 5
    },

    listSectionText: {
        color: OVERLAY_FONT_COLOR,
        fontSize: 14,
        fontWeight: 'normal'
    },

    pullToRefresh: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20
    },

    pullToRefreshIcon: {
        backgroundColor: 'transparent',
        color: OVERLAY_FONT_COLOR,
        fontSize: 20
    },

    pullToRefreshText: {
        backgroundColor: 'transparent',
        color: OVERLAY_FONT_COLOR
    },

    touchableView: {
        flexDirection: 'row'
    }
};

const SIDEBAR_STYLES = {
    /**
     * The topmost container of the side bar.
     */
    sideMenuContainer: {
        bottom: 0,
        flexDirection: 'row',
        left: -SIDEBAR_WIDTH,
        position: 'absolute',
        top: 0,
        width: SIDEBAR_WIDTH
    },

    /**
     * The container of the actual content of the side menu.
     */
    sideMenuContent: {
        width: SIDEBAR_WIDTH
    },

    /**
     * The opaque area that covers the rest of the scren, when
     * the side bar is open.
     */
    sideMenuShadow: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1
    },

    /**
     * The touchable area of the rest of the screen that closes the side bar
     * when tapped.
     */
    sideMenuShadowTouchable: {
        flex: 1
    }
};

/**
 * The styles of the React {@code Components} of the generic components
 * in the app.
 */
export default createStyleSheet({
    ...HEADER_STYLES,
    ...SECTION_LIST_STYLES,
    ...SIDEBAR_STYLES
});
