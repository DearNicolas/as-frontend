"use client"

import { Event } from "@/types/Event"
import { useState } from "react";
import { EventTabInfo } from "./EventTabInfo";
import { EventTabGroups } from "../groups/EventTabGroups";
import { EventTabPeople } from "../people/EventTabPeople";

type TabNames = 'info' | 'groups' | 'people';
type Props = {
    event: Event | undefined;
    refreshAction: () => void;
}
export const EventEdit = ({ event, refreshAction }: Props) => {
    if (!event) return;
    const [tab, setTab] = useState<TabNames>('info');

    return (
        <div>
            <div className="flex text-center border-b border-white cursor-pointer">
                <div onClick={() => setTab('info')} className={`flex-1 p-3 hover:bg-gradient-to-r from-white to-black ${tab === 'info' ? 'bg-gradient-to-r from-black to-white ' : ''}`}>Informações</div>
                <div onClick={() => setTab('groups')} className={`flex-1 p-3 hover:bg-gradient-to-r from-black via-gray-300 to-black  ${tab === 'groups' ? 'bg-gradient-to-r from-black to-white ' : ''}`}>Grupos</div>
                <div onClick={() => setTab('people')} className={`flex-1 p-3 hover:bg-gradient-to-r from-black to-white  ${tab === 'people' ? 'bg-gradient-to-r from-black to-white ' : ''}`}>Pessoas</div>
            </div>
            <div>
                {tab === 'info' && <EventTabInfo event={event} refreshAction={refreshAction} />}
                {tab === 'groups' && <EventTabGroups eventId={event.id} />}
                {tab === 'people' && <EventTabPeople eventId={event.id} />}
            </div>
        </div>
    )
}