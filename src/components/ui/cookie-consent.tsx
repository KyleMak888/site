"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./button";

const COOKIE_CONSENT_KEY = "linkend-cookie-consent";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    functional: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setShowBanner(true);
    } else {
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
      } catch (e) {
        setShowBanner(true);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const minimalConsent = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(minimalConsent));
    setPreferences(minimalConsent);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleToggle = (key: keyof typeof preferences) => {
    if (key === "necessary") return; // Cannot disable necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6"
        role="dialog"
        aria-label="Cookie consent banner"
        aria-describedby="cookie-consent-description"
      >
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white shadow-2xl">
          {!showSettings ? (
            <div className="p-6 md:flex md:items-center md:justify-between md:gap-6">
              <div className="flex-1">
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  🍪 我们使用Cookie
                </h3>
                <p id="cookie-consent-description" className="text-sm text-gray-600">
                  我们使用Cookie和类似技术来改善您的浏览体验、分析网站流量，并提供个性化内容。
                  您可以选择接受所有Cookie或自定义您的偏好。
                  了解更多请查看我们的{" "}
                  <Link href="/privacy" className="text-primary underline hover:text-primary-600">
                    隐私政策
                  </Link>
                  。
                </p>
              </div>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row md:mt-0 md:shrink-0">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSettings(true)}
                  aria-label="自定义Cookie设置"
                >
                  自定义设置
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRejectAll}
                  aria-label="拒绝可选Cookie"
                >
                  拒绝可选
                </Button>
                <Button
                  size="sm"
                  onClick={handleAcceptAll}
                  aria-label="接受所有Cookie"
                >
                  接受全部
                </Button>
              </div>
            </div>
          ) : (
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">
                  Cookie偏好设置
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-900"
                  aria-label="关闭设置"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between rounded-lg border border-gray-200 p-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-gray-900">必要Cookie</h4>
                      <span className="rounded-full bg-gray-200 px-2 py-0.5 text-xs text-gray-700">
                        始终启用
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">
                      这些Cookie对网站功能至关重要，无法禁用。
                    </p>
                  </div>
                  <div className="ml-4 flex h-6 w-11 shrink-0 items-center rounded-full bg-primary">
                    <span className="h-5 w-5 translate-x-6 rounded-full bg-white shadow-sm transition-transform" />
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="flex items-start justify-between rounded-lg border border-gray-200 p-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">功能Cookie</h4>
                    <p className="mt-1 text-sm text-gray-600">
                      用于记住您的偏好设置，如语言和地区。
                    </p>
                  </div>
                  <button
                    onClick={() => handleToggle("functional")}
                    className={`ml-4 flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
                      preferences.functional ? "bg-primary" : "bg-gray-300"
                    }`}
                    role="switch"
                    aria-checked={preferences.functional}
                    aria-label="功能Cookie开关"
                  >
                    <span
                      className={`h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
                        preferences.functional ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between rounded-lg border border-gray-200 p-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">分析Cookie</h4>
                    <p className="mt-1 text-sm text-gray-600">
                      帮助我们了解访客如何使用网站，以便改进用户体验。
                    </p>
                  </div>
                  <button
                    onClick={() => handleToggle("analytics")}
                    className={`ml-4 flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
                      preferences.analytics ? "bg-primary" : "bg-gray-300"
                    }`}
                    role="switch"
                    aria-checked={preferences.analytics}
                    aria-label="分析Cookie开关"
                  >
                    <span
                      className={`h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
                        preferences.analytics ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between rounded-lg border border-gray-200 p-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">营销Cookie</h4>
                    <p className="mt-1 text-sm text-gray-600">
                      用于跟踪访客并展示相关广告。
                    </p>
                  </div>
                  <button
                    onClick={() => handleToggle("marketing")}
                    className={`ml-4 flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
                      preferences.marketing ? "bg-primary" : "bg-gray-300"
                    }`}
                    role="switch"
                    aria-checked={preferences.marketing}
                    aria-label="营销Cookie开关"
                  >
                    <span
                      className={`h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
                        preferences.marketing ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
                <Button
                  variant="outline"
                  onClick={handleRejectAll}
                  aria-label="拒绝可选Cookie"
                >
                  拒绝可选
                </Button>
                <Button
                  onClick={handleAcceptSelected}
                  aria-label="保存Cookie偏好"
                >
                  保存偏好
                </Button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
