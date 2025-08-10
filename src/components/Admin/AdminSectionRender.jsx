'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import AdsSideBar from './secondaryNavbar/AdsSideBar';
import AdminAdsSection from './sections/Ads/AdminAdsSection';

import AnalyticsSideBar from './secondaryNavbar/AnalyticsSideBar';
import AdminAnalyticsSection from './sections/Analytics/AdminAnalyticsSection';

import AnnouncementsSideBar from './secondaryNavbar/AnnouncementsSideBar';
import AdminAnnouncementsSection from './sections/Announcements/AdminAnnouncementsSection';

import DashboardSideBar from './secondaryNavbar/DashboardSideBar';
import AdminDashboardsSection from './sections/Dashboards/AdminDashboardsSection';

import DockerSideBar from './secondaryNavbar/DockerSideBar';
import AdminDockerSection from './sections/Docker/AdminDockerSection';

import InstituteSideBar from './secondaryNavbar/InstituteSideBar';
import AdminInstituteSection from './sections/Institute/AdminInstituteSection';

import PlansSideBar from './secondaryNavbar/PlansSideBar';
import AdminPlansSection from './sections/Plans/AdminPlansSection';

import ServicesSideBar from './secondaryNavbar/ServicesSideBar';
import AdminServicesSection from './sections/Services/AdminServicesSection';

import SettingsSideBar from './secondaryNavbar/SettingsSideBar';
import AdminSettingsSection from './sections/Settings/AdminSettingsSection';

import UsersSideBar from './secondaryNavbar/UsersSideBar';
import AdminUserSection from './sections/Users/AdminUserSection';

const queryClient = new QueryClient();

const AdminSectionRender = (data) => {
    const { section } = data;

    const sectionMap = {
        ads: [<AdsSideBar />, <AdminAdsSection />],
        analytics: [<AnalyticsSideBar />, <AdminAnalyticsSection />],
        announcements: [
            <AnnouncementsSideBar />,
            <AdminAnnouncementsSection />,
        ],
        dashboard: [<DashboardSideBar />, <AdminDashboardsSection />],
        docker: [<DockerSideBar />, <AdminDockerSection />],
        institute: [<InstituteSideBar />, <AdminInstituteSection />],
        plans: [<PlansSideBar />, <AdminPlansSection />],
        services: [<ServicesSideBar />, <AdminServicesSection />],
        settings: [<SettingsSideBar />, <AdminSettingsSection />],
        users: [<UsersSideBar />, <AdminUserSection />],
    };

    return (
        <QueryClientProvider client={queryClient}>
            {sectionMap[section]?.[0] || <div>Section not found</div>}
            {sectionMap[section]?.[1]}
        </QueryClientProvider>
    );
};

export default AdminSectionRender;
