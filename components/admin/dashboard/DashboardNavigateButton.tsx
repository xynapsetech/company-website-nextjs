"use client"
import { Button } from '@/components/ui/button';
import React from 'react'
import { BsArrowRight } from "react-icons/bs";

export default function DashboardNavigateButton(props:any) {
  let { routeUrl } = props;
  return (
    <Button
          className="w-full gap-4"
          variant="outline"
          onClick={() => {
            location.assign(routeUrl);
          }}
        >
          View List
          <div className="text-xl">
            <BsArrowRight />
          </div>
        </Button>
  )
}
