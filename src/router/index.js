const Home = () => import('../Home.vue');
const NotFound = () => import('../components/404.vue');


const Helloworld = () => import('../components/elements/helloworld/helloworld.vue');
const Transitions = () => import('../components/elements/helloworld/transitions.vue');

const Layout = () => import('../components/elements/basic/layout.vue');
const Container = () => import('../components/elements/basic/container.vue');
const Icon = () => import('../components/elements/basic/icon.vue');
const EButton = () => import('../components/elements/basic/ebutton.vue');

const EAlert = () => import('../components/elements/notice/ealert.vue');
const ELoading = () => import('../components/elements/notice/eloading.vue');
const EMessage = () => import('../components/elements/notice/emessage.vue');
const EMessageBox = () => import('../components/elements/notice/emessagebox.vue');
const ENotification = () => import('../components/elements/notice/enotification.vue');

const ENavMenu = () => import('../components/elements/navigation/enavmenu.vue');
const ETabs = () => import('../components/elements/navigation/etabs.vue');
const EBreadcrumb = () => import('../components/elements/navigation/ebreadcrumb.vue');
const EDropdown = () => import('../components/elements/navigation/edropdown.vue');
const ESteps = () => import('../components/elements/navigation/esteps.vue');

const EDialog = () => import('../components/elements/others/edialog.vue');
const ETooltip = () => import('../components/elements/others/etooltip.vue');
const EPopover = () => import('../components/elements/others/epopover.vue');
const ECard = () => import('../components/elements/others/ecard.vue');
const ECarousel = () => import('../components/elements/others/ecarousel.vue');
const ECollapse = () => import('../components/elements/others/ecollapse.vue');

const SelfTemplates = () => import('../components/elements/selftemplates/SelfTemplates.vue');
const FooterCrumbs = () => import('../components/elements/selftemplates/FooterCrumbs.vue');


const ERadio = () => import('../components/elements/form/eradio.vue');
const ECheckbox = () => import('../components/elements/form/echeckbox.vue');
const EInput = () => import('../components/elements/form/einput.vue');
const EInputNumber = () => import('../components/elements/form/einputnumber.vue');
const ESelect = () => import('../components/elements/form/eselect.vue');
const ECascader = () => import('../components/elements/form/ecascader.vue');
const ESwitch = () => import('../components/elements/form/eswitch.vue');
const ESlider = () => import('../components/elements/form/eslider.vue');
const ETimePicker = () => import('../components/elements/form/etimepicker.vue');
const EDatePicker = () => import('../components/elements/form/edatepicker.vue');
const EDateTimePicker = () => import('../components/elements/form/edatetimepicker.vue');
const EUpload = () => import('../components/elements/form/eupload.vue');
const ERate = () => import('../components/elements/form/erate.vue');
const EColorPicker = () => import('../components/elements/form/ecolorpicker.vue');
const ETransfer = () => import('../components/elements/form/etransfer.vue');
const EForm = () => import('../components/elements/form/eform.vue');


const ETable = () => import('../components/elements/data/etable.vue');
const ETag = () => import('../components/elements/data/etag.vue');
const EProgress = () => import('../components/elements/data/eprogress.vue');
const ETree = () => import('../components/elements/data/etree.vue');
const EPagination = () => import('../components/elements/data/epagination.vue');
const EBadge = () => import('../components/elements/data/ebadge.vue');


const chkFiltersDD = () => import('../components/custom/chkFiltersDD.vue');
const ctags = () => import('../components/custom/ctags.vue');
const dateField = () => import('../components/custom/dateField.vue');
const dform = () => import('../components/custom/dform.vue');
const dynamicTable = () => import('../components/custom/dynamicTable.vue');
const tags = () => import('../components/custom/tags.vue');
const multiform = () => import('../components/custom/multiform.vue');
const suggesttextarea = () => import('../components/custom/suggesttextarea.vue');
const dragdropfile = () => import('../components/custom/dragdropfile.vue');

const route_Custom = {
    path: '/',
    component: Home,
    name: 'Custom',
    iconCls: 'fa fa-circle-o-notch',
    hidden: false,
    children: [
         {path: 'chkFiltersDD', component: chkFiltersDD, name: 'chk dropdowns', hidden: false},
         {path: 'ctags', component: ctags, name: 'multi select with custom', hidden: false},
         {path: 'tags', component: tags, name: 'multi selectbox', hidden: false},
         {path: 'dateField', component: dateField, name: 'dates', hidden: false},
         {path: 'dynamicTable', component: dynamicTable, name: 'datatable', hidden: false},         
         {path: 'dform', component: dform, name: 'dforms', hidden: false},
         {path: 'multiform', component: multiform, name: 'multiform', hidden: false},
         {path: 'suggesttextarea', component: suggesttextarea, name: 'suggesttextarea', hidden: false},
         {path: 'dragdropfile', component: dragdropfile, name: 'dragdropfile', hidden: false},
         
    ]
};

const route_NotFound = {
    path: '/404',
    component: NotFound,
    name: 'The page was hijacked by aliens',
    hidden: true,
};

const route_Redirect = {
    path: '*',
    redirect: {path: '/404'},
    hidden: true,
};

const route_Helloworld = {
    path: '/',
    component: Home,
    name: 'Helloworld',
    iconCls: 'fa fa-hand-paper-o',
    hidden: false,
    children: [
        {path: 'helloworld', component: Helloworld, name: 'helloworld', hidden: false},
        {path: 'transition', component: Transitions, name: 'built-in transition animation', hidden: false},
    ]
};

const route_Basic = {
    path: '/',
    component: Home,
    name: 'Basic',
    iconCls: 'fa fa-bars',
    hidden: false,
    children: [
         {path: 'layout', component: Layout, name: 'layout', hidden: false},
         {path: 'container', component: Container, name: 'layout container', hidden: false},
         {path: 'icon', component: Icon, name: 'icon', hidden: false},
         {path: 'ebutton', component: EButton, name: 'button', hidden: false},
    ]
};


const route_Notice = {
    path: '/',
    component: Home,
    name: 'Notice',
    iconCls: 'fa fa-exclamation',
    hidden: false,
    children: [
        {path: 'ealert', component: EAlert, name: 'warn', hidden: false},
        {path: 'eloading', component: ELoading, name: 'load', hidden: false},
        {path: 'emessage', component: EMessage, name: 'notification', hidden: false},
        {path: 'emessagebox', component: EMessageBox, name: 'pop-up', hidden: false},
        {path: 'enotification', component: ENotification, name: 'Notice', hidden: false},
    ]
};

const route_Navigation = {
    path: '/',
    component: Home,
    name: 'Navigation',
    iconCls: 'fa fa-navicon',
    hidden: false,
    children: [
         {path: 'enavmenu', component: ENavMenu, name: 'navmenu', hidden: false},
         {path: 'etabs', component: ETabs, name: 'tabs', hidden: false},
         {path: 'ebreadcrumb', component: EBreadcrumb, name: 'breadcrumb', hidden: false},
         {path: 'edropdown', component: EDropdown, name: 'dropdown', hidden: false},
         {path: 'esteps', component: ESteps, name: 'step bar', hidden: false},
    ]
};

const route_Others = {
    path: '/',
    component: Home,
    name: 'Others',
    iconCls: 'fa fa-circle-o-notch',
    hidden: false,
    children: [
         {path: 'edialog', component: EDialog, name: 'dialog', hidden: false},
         {path: 'etooltip', component: ETooltip, name: 'text tip', hidden: false},
         {path: 'epopover', component: EPopover, name: 'popover', hidden: false},
         {path: 'ecard', component: ECard, name: 'card', hidden: false},
         {path: 'ecarousel', component: ECarousel, name: 'carousel', hidden: false},
         {path: 'ecollapse', component: ECollapse, name: 'collapse panel', hidden: false},
    ]
};

const route_Selftemplates = {
    path: '/',
    component: Home,
    name: 'Selftemplates',
    iconCls: 'fa fa-circle-o-notch',
    hidden: false,
    children: [
        {path: 'selftemplates', component: SelfTemplates, name: 'custom template', hidden: false},
        {path: 'FooterCrumbs', component: FooterCrumbs, name: 'Custom Template 2', hidden: false},
    ]
};




 const route_Form = {
    path: '/',
    component: Home,
    name: 'Form',
    iconCls: 'fa fa-wpforms',
    hidden: false,
    children: [
        {path: 'eradio', component: ERadio, name: 'radio box', hidden: false},
        {path: 'echeckbox', component: ECheckbox, name: 'checkbox', hidden: false},
        {path: 'einput', component: EInput, name: 'input box', hidden: false},
        {path: 'einputnumber', component: EInputNumber, name: 'counter', hidden: false},
        {path: 'eselect', component: ESelect, name: 'selector', hidden: false},
        {path: 'ecascader', component: ECascader, name: 'cascading selector', hidden: false},
        {path: 'eswitch', component: ESwitch, name: 'switch', hidden: false},
        {path: 'eslider', component: ESlider, name: 'slider', hidden: false},
        {path: 'etimepicker', component: ETimePicker, name: 'timepicker', hidden: false},
        {path: 'edatepicker', component: EDatePicker, name: 'datepicker', hidden: false},
        {path: 'edatetimepicker', component: EDateTimePicker, name: 'datetimepicker', hidden: false},
        {path: 'eupload', component: EUpload, name: 'upload', hidden: false},
        {path: 'erate', component: ERate, name: 'rating', hidden: false},
        {path: 'ecolorpicker', component: EColorPicker, name: 'colorpicker', hidden: false},
        {path: 'etransfer', component: ETransfer, name: 'shuttle box', hidden: false},
        {path: 'eform', component: EForm, name: 'form', hidden: false},
    ]
};

const route_Data = {
    path: '/',
    component: Home,
    name: 'Data',
    iconCls: 'fa fa-database',
    hidden: false,
    children: [
         {path: 'etable', component: ETable, name: 'table', hidden: false},
         {path: 'etag', component: ETag, name: 'tag', hidden: false},
         {path: 'eprogress', component: EProgress, name: 'progress bar', hidden: false},
         {path: 'etree', component: ETree, name: 'tree control', hidden: false},
         {path: 'epagination', component: EPagination, name: 'page', hidden: false},
         {path: 'ebadge', component: EBadge, name: 'marker', hidden: false},
    ]
};


const routes = [    
    route_NotFound,
    route_Redirect,
    route_Helloworld,
    route_Basic,
    route_Notice,
    route_Navigation,
    route_Others,
    route_Selftemplates,
    route_Form,
    route_Data,
    route_Custom
];

export default routes;