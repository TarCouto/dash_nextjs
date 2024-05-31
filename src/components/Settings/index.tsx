'use client'

import * as Tabs from "@radix-ui/react-tabs"
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { useState } from "react"
import { TabItem } from "./TabItem"

interface TabItemProps {
    value: string;
    title: string;
    content: JSX.Element;
}

interface SettingsTabsProps {
    tabItems: TabItemProps[];
}

export function SettingsTabs({ tabItems }: SettingsTabsProps) {
    const [currentTab, setCurrentTab] = useState(tabItems[0]?.value || '')

    return (
        <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
            <ScrollArea.Root className="w-full" type="scroll">
                <ScrollArea.Viewport className="w-full overflow-x-scroll">
                    <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
                        {tabItems.map((item) => (
                            <TabItem
                                key={item.value}
                                value={item.value}
                                title={item.title}
                                isSelected={currentTab === item.value}
                            />
                        ))}
                    </Tabs.List>
                </ScrollArea.Viewport>

                <ScrollArea.Scrollbar
                    className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
                    orientation="horizontal"
                >
                    <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
                </ScrollArea.Scrollbar>
            </ScrollArea.Root>

            {tabItems.map((item) => (
                <Tabs.Content key={item.value} value={item.value}>
                    {item.content}
                </Tabs.Content>
            ))}
        </Tabs.Root>
    )
}
