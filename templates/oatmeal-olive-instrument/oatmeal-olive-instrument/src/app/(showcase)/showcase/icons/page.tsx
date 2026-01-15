'use client'

import Link from 'next/link'
import { useState } from 'react'

// All 103 actual main icons
import { AlertTriangleIcon } from '@/components/icons/alert-triangle-icon'
import { ArchiveBoxIcon } from '@/components/icons/archive-box-icon'
import { ArchiveBoxXIcon } from '@/components/icons/archive-box-x-icon'
import { ArrowDownArrowUpIcon } from '@/components/icons/arrow-down-arrow-up-icon'
import { ArrowLeftArrowRightIcon } from '@/components/icons/arrow-left-arrow-right-icon'
import { ArrowNarrowDownIcon } from '@/components/icons/arrow-narrow-down-icon'
import { ArrowNarrowLeftIcon } from '@/components/icons/arrow-narrow-left-icon'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { ArrowNarrowUpIcon } from '@/components/icons/arrow-narrow-up-icon'
import { AtSymbolIcon } from '@/components/icons/at-symbol-icon'
import { BanknotesIcon } from '@/components/icons/banknotes-icon'
import { BeakerIcon } from '@/components/icons/beaker-icon'
import { BellIcon } from '@/components/icons/bell-icon'
import { BookOpenIcon } from '@/components/icons/book-open-icon'
import { BriefcaseIcon } from '@/components/icons/briefcase-icon'
import { Building2Icon } from '@/components/icons/building-2-icon'
import { BuildingIcon } from '@/components/icons/building-icon'
import { BuildingLibraryIcon } from '@/components/icons/building-library-icon'
import { BuildingStorefrontIcon } from '@/components/icons/building-storefront-icon'
import { CalendarIcon } from '@/components/icons/calendar-icon'
import { CameraIcon } from '@/components/icons/camera-icon'
import { CameraVideoIcon } from '@/components/icons/camera-video-icon'
import { ChartBarIcon } from '@/components/icons/chart-bar-icon'
import { ChartLineIcon } from '@/components/icons/chart-line-icon'
import { ChartPieCircleIcon } from '@/components/icons/chart-pie-circle-icon'
import { ChatBubbleCircleEllipsisIcon } from '@/components/icons/chat-bubble-circle-ellipsis-icon'
import { ChatBubbleCircleIcon } from '@/components/icons/chat-bubble-circle-icon'
import { ChatBubbleCircleStackedIcon } from '@/components/icons/chat-bubble-circle-stacked-icon'
import { ChatBubbleRectangleEllipsisIcon } from '@/components/icons/chat-bubble-rectangle-ellipsis-icon'
import { ChatBubbleRectangleIcon } from '@/components/icons/chat-bubble-rectangle-icon'
import { CheckmarkIcon } from '@/components/icons/checkmark-icon'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { ClipboardIcon } from '@/components/icons/clipboard-icon'
import { ClockIcon } from '@/components/icons/clock-icon'
import { CloudArrowDownIcon } from '@/components/icons/cloud-arrow-down-icon'
import { CloudArrowUpIcon } from '@/components/icons/cloud-arrow-up-icon'
import { CloudIcon } from '@/components/icons/cloud-icon'
import { CodeSquareIcon } from '@/components/icons/code-square-icon'
import { CogIcon } from '@/components/icons/cog-icon'
import { CompassIcon } from '@/components/icons/compass-icon'
import { CpuIcon } from '@/components/icons/cpu-icon'
import { Document2StackedIcon } from '@/components/icons/document-2-stacked-icon'
import { DocumentIcon } from '@/components/icons/document-icon'
import { EducationCapIcon } from '@/components/icons/education-cap-icon'
import { FilterIcon } from '@/components/icons/filter-icon'
import { FingerprintIcon } from '@/components/icons/fingerprint-icon'
import { FlagIcon } from '@/components/icons/flag-icon'
import { FolderArrowLeftIcon } from '@/components/icons/folder-arrow-left-icon'
import { FolderArrowRightIcon } from '@/components/icons/folder-arrow-right-icon'
import { FolderIcon } from '@/components/icons/folder-icon'
import { FolderMinusIcon } from '@/components/icons/folder-minus-icon'
import { FolderPlusIcon } from '@/components/icons/folder-plus-icon'
import { GitBranchIcon } from '@/components/icons/git-branch-icon'
import { GitDiffIcon } from '@/components/icons/git-diff-icon'
import { GitMergeIcon } from '@/components/icons/git-merge-icon'
import { GitPullIcon } from '@/components/icons/git-pull-icon'
import { HardDriveIcon } from '@/components/icons/hard-drive-icon'
import { HeartIcon } from '@/components/icons/heart-icon'
import { HeartPulseIcon } from '@/components/icons/heart-pulse-icon'
import { HomeIcon } from '@/components/icons/home-icon'
import { InboxIcon } from '@/components/icons/inbox-icon'
import { InformationCircleIcon } from '@/components/icons/information-circle-icon'
import { KeyIcon } from '@/components/icons/key-icon'
import { LanguageIcon } from '@/components/icons/language-icon'
import { LifebuoyIcon } from '@/components/icons/lifebuoy-icon'
import { LightBulbIcon } from '@/components/icons/light-bulb-icon'
import { LightingBoltIcon } from '@/components/icons/lighting-bolt-icon'
import { LockIcon } from '@/components/icons/lock-icon'
import { LockOpenIcon } from '@/components/icons/lock-open-icon'
import { MagnifyingGlassIcon } from '@/components/icons/magnifying-glass-icon'
import { MailIcon } from '@/components/icons/mail-icon'
import { MapIcon } from '@/components/icons/map-icon'
import { MapPinIcon } from '@/components/icons/map-pin-icon'
import { MicrophoneIcon } from '@/components/icons/microphone-icon'
import { MinusCircleIcon } from '@/components/icons/minus-circle-icon'
import { MinusIcon } from '@/components/icons/minus-icon'
import { MoonIcon } from '@/components/icons/moon-icon'
import { NewspaperIcon } from '@/components/icons/newspaper-icon'
import { PaperclipIcon } from '@/components/icons/paperclip-icon'
import { PencilOnSquareIcon } from '@/components/icons/pencil-on-square-icon'
import { PhotoIcon } from '@/components/icons/photo-icon'
import { PlusCircleIcon } from '@/components/icons/plus-circle-icon'
import { PlusIcon } from '@/components/icons/plus-icon'
import { QuestionCircleIcon } from '@/components/icons/question-circle-icon'
import { RepeatIcon } from '@/components/icons/repeat-icon'
import { RocketIcon } from '@/components/icons/rocket-icon'
import { ShieldExclamationIcon } from '@/components/icons/shield-exclamation-icon'
import { ShoppingBagIcon } from '@/components/icons/shopping-bag-icon'
import { ShoppingCartIcon } from '@/components/icons/shopping-cart-icon'
import { SlidersIcon } from '@/components/icons/sliders-icon'
import { SparklesIcon } from '@/components/icons/sparkles-icon'
import { Square3Stack3dIcon } from '@/components/icons/square-3-stack-3d-icon'
import { Squares2StackedIcon } from '@/components/icons/squares-2-stacked-icon'
import { StarIcon } from '@/components/icons/star-icon'
import { SunIcon } from '@/components/icons/sun-icon'
import { TagIcon } from '@/components/icons/tag-icon'
import { TargetIcon } from '@/components/icons/target-icon'
import { TerminalIcon } from '@/components/icons/terminal-icon'
import { TicketIcon } from '@/components/icons/ticket-icon'
import { TrashIcon } from '@/components/icons/trash-icon'
import { UiLayoutIcon } from '@/components/icons/ui-layout-icon'
import { UnorderedListIcon } from '@/components/icons/unordered-list-icon'
import { User2Icon } from '@/components/icons/user-2-icon'
import { UserArrowLeftIcon } from '@/components/icons/user-arrow-left-icon'
import { UserArrowRightIcon } from '@/components/icons/user-arrow-right-icon'
import { UserCircleDottedIcon } from '@/components/icons/user-circle-dotted-icon'
import { UserCircleIcon } from '@/components/icons/user-circle-icon'

// 5 Social icons (actual)
import { FacebookIcon } from '@/components/icons/social/facebook-icon'
import { GitHubIcon } from '@/components/icons/social/github-icon'
import { InstagramIcon } from '@/components/icons/social/instagram-icon'
import { XIcon } from '@/components/icons/social/x-icon'
import { YouTubeIcon } from '@/components/icons/social/youtube-icon'

const icons = [
  { name: 'AlertTriangle', component: AlertTriangleIcon },
  { name: 'ArchiveBox', component: ArchiveBoxIcon },
  { name: 'ArchiveBoxX', component: ArchiveBoxXIcon },
  { name: 'ArrowDownArrowUp', component: ArrowDownArrowUpIcon },
  { name: 'ArrowLeftArrowRight', component: ArrowLeftArrowRightIcon },
  { name: 'ArrowNarrowDown', component: ArrowNarrowDownIcon },
  { name: 'ArrowNarrowLeft', component: ArrowNarrowLeftIcon },
  { name: 'ArrowNarrowRight', component: ArrowNarrowRightIcon },
  { name: 'ArrowNarrowUp', component: ArrowNarrowUpIcon },
  { name: 'AtSymbol', component: AtSymbolIcon },
  { name: 'Banknotes', component: BanknotesIcon },
  { name: 'Beaker', component: BeakerIcon },
  { name: 'Bell', component: BellIcon },
  { name: 'BookOpen', component: BookOpenIcon },
  { name: 'Briefcase', component: BriefcaseIcon },
  { name: 'Building', component: BuildingIcon },
  { name: 'Building2', component: Building2Icon },
  { name: 'BuildingLibrary', component: BuildingLibraryIcon },
  { name: 'BuildingStorefront', component: BuildingStorefrontIcon },
  { name: 'Calendar', component: CalendarIcon },
  { name: 'Camera', component: CameraIcon },
  { name: 'CameraVideo', component: CameraVideoIcon },
  { name: 'ChartBar', component: ChartBarIcon },
  { name: 'ChartLine', component: ChartLineIcon },
  { name: 'ChartPieCircle', component: ChartPieCircleIcon },
  { name: 'ChatBubbleCircle', component: ChatBubbleCircleIcon },
  { name: 'ChatBubbleCircleEllipsis', component: ChatBubbleCircleEllipsisIcon },
  { name: 'ChatBubbleCircleStacked', component: ChatBubbleCircleStackedIcon },
  { name: 'ChatBubbleRectangle', component: ChatBubbleRectangleIcon },
  { name: 'ChatBubbleRectangleEllipsis', component: ChatBubbleRectangleEllipsisIcon },
  { name: 'Checkmark', component: CheckmarkIcon },
  { name: 'Chevron', component: ChevronIcon },
  { name: 'Clipboard', component: ClipboardIcon },
  { name: 'Clock', component: ClockIcon },
  { name: 'Cloud', component: CloudIcon },
  { name: 'CloudArrowDown', component: CloudArrowDownIcon },
  { name: 'CloudArrowUp', component: CloudArrowUpIcon },
  { name: 'CodeSquare', component: CodeSquareIcon },
  { name: 'Cog', component: CogIcon },
  { name: 'Compass', component: CompassIcon },
  { name: 'Cpu', component: CpuIcon },
  { name: 'Document', component: DocumentIcon },
  { name: 'Document2Stacked', component: Document2StackedIcon },
  { name: 'EducationCap', component: EducationCapIcon },
  { name: 'Filter', component: FilterIcon },
  { name: 'Fingerprint', component: FingerprintIcon },
  { name: 'Flag', component: FlagIcon },
  { name: 'Folder', component: FolderIcon },
  { name: 'FolderArrowLeft', component: FolderArrowLeftIcon },
  { name: 'FolderArrowRight', component: FolderArrowRightIcon },
  { name: 'FolderMinus', component: FolderMinusIcon },
  { name: 'FolderPlus', component: FolderPlusIcon },
  { name: 'GitBranch', component: GitBranchIcon },
  { name: 'GitDiff', component: GitDiffIcon },
  { name: 'GitMerge', component: GitMergeIcon },
  { name: 'GitPull', component: GitPullIcon },
  { name: 'HardDrive', component: HardDriveIcon },
  { name: 'Heart', component: HeartIcon },
  { name: 'HeartPulse', component: HeartPulseIcon },
  { name: 'Home', component: HomeIcon },
  { name: 'Inbox', component: InboxIcon },
  { name: 'InformationCircle', component: InformationCircleIcon },
  { name: 'Key', component: KeyIcon },
  { name: 'Language', component: LanguageIcon },
  { name: 'Lifebuoy', component: LifebuoyIcon },
  { name: 'LightBulb', component: LightBulbIcon },
  { name: 'LightingBolt', component: LightingBoltIcon },
  { name: 'Lock', component: LockIcon },
  { name: 'LockOpen', component: LockOpenIcon },
  { name: 'MagnifyingGlass', component: MagnifyingGlassIcon },
  { name: 'Mail', component: MailIcon },
  { name: 'Map', component: MapIcon },
  { name: 'MapPin', component: MapPinIcon },
  { name: 'Microphone', component: MicrophoneIcon },
  { name: 'Minus', component: MinusIcon },
  { name: 'MinusCircle', component: MinusCircleIcon },
  { name: 'Moon', component: MoonIcon },
  { name: 'Newspaper', component: NewspaperIcon },
  { name: 'Paperclip', component: PaperclipIcon },
  { name: 'PencilOnSquare', component: PencilOnSquareIcon },
  { name: 'Photo', component: PhotoIcon },
  { name: 'Plus', component: PlusIcon },
  { name: 'PlusCircle', component: PlusCircleIcon },
  { name: 'QuestionCircle', component: QuestionCircleIcon },
  { name: 'Repeat', component: RepeatIcon },
  { name: 'Rocket', component: RocketIcon },
  { name: 'ShieldExclamation', component: ShieldExclamationIcon },
  { name: 'ShoppingBag', component: ShoppingBagIcon },
  { name: 'ShoppingCart', component: ShoppingCartIcon },
  { name: 'Sliders', component: SlidersIcon },
  { name: 'Sparkles', component: SparklesIcon },
  { name: 'Square3Stack3d', component: Square3Stack3dIcon },
  { name: 'Squares2Stacked', component: Squares2StackedIcon },
  { name: 'Star', component: StarIcon },
  { name: 'Sun', component: SunIcon },
  { name: 'Tag', component: TagIcon },
  { name: 'Target', component: TargetIcon },
  { name: 'Terminal', component: TerminalIcon },
  { name: 'Ticket', component: TicketIcon },
  { name: 'Trash', component: TrashIcon },
  { name: 'UiLayout', component: UiLayoutIcon },
  { name: 'UnorderedList', component: UnorderedListIcon },
  { name: 'User2', component: User2Icon },
  { name: 'UserArrowLeft', component: UserArrowLeftIcon },
  { name: 'UserArrowRight', component: UserArrowRightIcon },
  { name: 'UserCircle', component: UserCircleIcon },
  { name: 'UserCircleDotted', component: UserCircleDottedIcon },
]

const socialIcons = [
  { name: 'Facebook', component: FacebookIcon },
  { name: 'GitHub', component: GitHubIcon },
  { name: 'Instagram', component: InstagramIcon },
  { name: 'X', component: XIcon },
  { name: 'YouTube', component: YouTubeIcon },
]

export default function IconsShowcase() {
  const [search, setSearch] = useState('')

  const filteredIcons = icons.filter((icon) =>
    icon.name.toLowerCase().includes(search.toLowerCase())
  )
  const filteredSocialIcons = socialIcons.filter((icon) =>
    icon.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-olive-100">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/showcase" className="text-sm text-olive-500 hover:text-olive-700">
            ← Back to Showcase
          </Link>
          <h1 className="mt-2 font-display text-4xl text-olive-950">
            Icons ({icons.length + socialIcons.length})
          </h1>
        </div>

        {/* Search */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search icons..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-olive-200 bg-white px-4 py-3 text-olive-900 placeholder-olive-400 focus:border-olive-400 focus:outline-none"
          />
        </div>

        {/* UI Icons */}
        <div className="mb-12">
          <h2 className="mb-6 font-display text-2xl text-olive-950">
            UI Icons ({filteredIcons.length})
          </h2>
          <div className="grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
            {filteredIcons.map(({ name, component: Icon }) => (
              <div
                key={name}
                className="group flex flex-col items-center rounded-xl border border-olive-200 bg-white p-4 transition hover:border-olive-400 hover:shadow-sm"
              >
                <Icon className="h-8 w-8 text-olive-600" />
                <span className="mt-2 truncate text-xs text-olive-500">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Social Icons */}
        <div>
          <h2 className="mb-6 font-display text-2xl text-olive-950">
            Social Icons ({filteredSocialIcons.length})
          </h2>
          <div className="grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
            {filteredSocialIcons.map(({ name, component: Icon }) => (
              <div
                key={name}
                className="group flex flex-col items-center rounded-xl border border-olive-200 bg-white p-4 transition hover:border-olive-400 hover:shadow-sm"
              >
                <Icon className="h-8 w-8 text-olive-600" />
                <span className="mt-2 truncate text-xs text-olive-500">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
