'use client';
import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import dynamic from 'next/dynamic';

// Simple skeleton loader component
const SkeletonLoader = ({ className }) => (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
);

// Dynamic imports with suspense enabled
const AdsSideBar = dynamic(() => import('./secondaryNavbar/AdsSideBar'), {
    suspense: true,
});
const AdminAdsSection = dynamic(
    () => import('./sections/Ads/AdminAdsSection'),
    { suspense: true }
);

const AnalyticsSideBar = dynamic(
    () => import('./secondaryNavbar/AnalyticsSideBar'),
    { suspense: true }
);
const AdminAnalyticsSection = dynamic(
    () => import('./sections/Analytics/AdminAnalyticsSection'),
    { suspense: true }
);

const AnnouncementsSideBar = dynamic(
    () => import('./secondaryNavbar/AnnouncementsSideBar'),
    { suspense: true }
);
const AdminAnnouncementsSection = dynamic(
    () => import('./sections/Announcements/AdminAnnouncementsSection'),
    { suspense: true }
);

const DashboardSideBar = dynamic(
    () => import('./secondaryNavbar/DashboardSideBar'),
    { suspense: true }
);
const AdminDashboardsSection = dynamic(
    () => import('./sections/Dashboards/AdminDashboardsSection'),
    { suspense: true }
);

const DockerSideBar = dynamic(() => import('./secondaryNavbar/DockerSideBar'), {
    suspense: true,
});
const AdminDockerSection = dynamic(
    () => import('./sections/Docker/AdminDockerSection'),
    { suspense: true }
);

const InstituteSideBar = dynamic(
    () => import('./secondaryNavbar/InstituteSideBar'),
    { suspense: true }
);
const AdminInstituteSection = dynamic(
    () => import('./sections/Institute/AdminInstituteSection'),
    { suspense: true }
);

const PlansSideBar = dynamic(() => import('./secondaryNavbar/PlansSideBar'), {
    suspense: true,
});
const AdminPlansSection = dynamic(
    () => import('./sections/Plans/AdminPlansSection'),
    { suspense: true }
);

const ServicesSideBar = dynamic(
    () => import('./secondaryNavbar/ServicesSideBar'),
    { suspense: true }
);
const AdminServicesSection = dynamic(
    () => import('./sections/Services/AdminServicesSection'),
    { suspense: true }
);

const SettingsSideBar = dynamic(
    () => import('./secondaryNavbar/SettingsSideBar'),
    { suspense: true }
);
const AdminSettingsSection = dynamic(
    () => import('./sections/Settings/AdminSettingsSection'),
    { suspense: true }
);

const UsersSideBar = dynamic(() => import('./secondaryNavbar/UsersSideBar'), {
    suspense: true,
});
const AdminUserSection = dynamic(
    () => import('./sections/Users/AdminUserSection'),
    { suspense: true }
);

const queryClient = new QueryClient();

const AdminSectionRender = ({ section }) => {
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

    const [SideBar, SectionComponent] =
        sectionMap[section] || sectionMap['dashboard'];

    return (
        <QueryClientProvider client={queryClient}>
            <Suspense fallback={<SkeletonLoader className="w-48 h-screen" />}>
                {SideBar}
            </Suspense>
            <Suspense fallback={<SkeletonLoader className="flex-1 h-screen" />}>
                {SectionComponent}
            </Suspense>
        </QueryClientProvider>
    );
};

export default AdminSectionRender;
