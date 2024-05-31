'use client'

import * as Tabs from "@radix-ui/react-tabs"
import * as ScrollArea from '@radix-ui/react-scroll-area'

import { useState } from "react"
import { TabItem } from "./TabItem"

export function SettingsTabs() {

    const [currentTab, setCurrentTab] = useState('tab1')

    return (
        <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
            <ScrollArea.Root className="w-full" type="scroll">
                <ScrollArea.Viewport className="w-full overflow-x-scroll">
                    <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
                        <TabItem
                            value="tab1"
                            title="Banner"
                            isSelected={currentTab === 'tab1'}
                        />
                        <TabItem
                            value="tab2"
                            title="Content"
                            isSelected={currentTab === 'tab2'}
                        />
                        <TabItem
                            value="tab3"
                            title="Embed"
                            isSelected={currentTab === 'tab3'}
                        />
                        <TabItem
                            value="tab4"
                            title="Gallery"
                            isSelected={currentTab === 'tab4'}
                        />
                        <TabItem
                            value="tab5"
                            title="Localidade"
                            isSelected={currentTab === 'tab5'}
                        />
                        <TabItem
                            value="tab6"
                            title="Logon"
                            isSelected={currentTab === 'tab6'}
                        />
                        <TabItem
                            value="tab7"
                            title="Seo"
                            isSelected={currentTab === 'tab7'}
                        />
                        <TabItem
                            value="tab8"
                            title="Simple Contact"
                            isSelected={currentTab === 'tab8'}
                        />
                        <TabItem
                            value="tab9"
                            title="Social"
                            isSelected={currentTab === 'tab9'}
                        />
                        <TabItem
                            value="tab10"
                            title="Template"
                            isSelected={currentTab === 'tab10'}
                        />
                        <TabItem
                            value="tab11"
                            title="Content"
                            isSelected={currentTab === 'tab11'}
                        />
                        <TabItem
                            value="tab12"
                            title="Modules"
                            isSelected={currentTab === 'tab11'}
                        />
                    </Tabs.List>
                </ScrollArea.Viewport>

                <ScrollArea.Scrollbar
                    className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
                    orientation="horizontal"
                >
                    <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
                </ScrollArea.Scrollbar>
            </ScrollArea.Root>
        </Tabs.Root>
    )

}