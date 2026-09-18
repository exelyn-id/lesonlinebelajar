"use client";

import React from "react";
import { Button, ButtonProps } from "./Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps extends ButtonProps {
  label?: string;
  message?: string;
}

export function WhatsAppButton({
  label = "Konsultasi via WhatsApp",
  message,
  className,
  variant = "primary",
  size = "default",
  ...props
}: WhatsAppButtonProps) {
  const url = getWhatsAppUrl(message);

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={() => {
        window.open(url, "_blank", "noopener,noreferrer");
      }}
      {...props}
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      {label}
    </Button>
  );
}
