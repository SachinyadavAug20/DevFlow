import { getDevIcon } from "@/constant/techmap"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getDeviconsClassName=(techName:string)=>{
  return getDevIcon(techName)
}
